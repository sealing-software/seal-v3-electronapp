"use strict";

import electron, { remote } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension, { VUEJS3_DEVTOOLS } from "electron-devtools-installer";
import jetpack from "fs-jetpack";
const isDevelopment = process.env.NODE_ENV !== "production";
const { app, BrowserWindow, protocol, ipcMain } = electron;
const path = require("path");
const regedit = require("regedit");

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      enableRemoteModule: true,
      preload: __dirname + "\\preload.js", //path.join(__dirname, "preload.js"),
    },
  });

  //Disable the window menu
  win.setMenu(null);

  //console.log(__dirname + "\\preload.js");
  //console.log(__dirname);

  //win.setIcon(path.join(__dirname, "/src/assets/logo.svg"));

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
  }
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS3_DEVTOOLS);
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}

var vbsDirectory;
//Lazy implementation, need to investigate further on proper folder copy for serve and build
//vbs folder contains scripts required for regedit module. CANNOT be compiled by electron.
if (isDevelopment) {
  jetpack.copy("./node_modules/regedit/vbs", app.getAppPath() + "/vbs", {
    overwrite: true,
  });
  vbsDirectory = path.join(app.getAppPath(), "vbs");
} else {
  vbsDirectory = path.join(
    process.resourcesPath,
    "app/myfolder/subfolder/myscripts/myscript1.sh"
  );
}

//Change vbs directory location for regedit module
regedit.setExternalVBSLocation(vbsDirectory);
const promisifiedRegedit = regedit.promisified;

//Main conduct registry read when requested
ipcMain.on("req-reg", (e, item) => {
  //Initial reg key for software pull, this will be replaced with config file read.
  var regKey = "HKLM\\software\\Microsoft\\Windows\\CurrentVersion\\Uninstall";

  //Gets list of software objects from top level registry key
  regRequest(regKey);
});

//Finds values from keys and returns object
async function regRequest(topLevel) {
  promisifiedRegedit.list(topLevel).then((response) => {
    //Get array initial keys
    let appList = response[topLevel].keys;
    //Gets full registery location string
    const fullLoc = appList.map((key) => {
      let fullKey = topLevel + "\\" + key;
      return fullKey;
    });

    let softwareInfo = [];

    let promiseArray = fullLoc.map((fullKey) => {
      return new Promise(function (resolve, reject) {
        promisifiedRegedit
          .list(fullKey)
          .then((response) => {
            let values = response[fullKey].values;
            //console.log(values);
            //Create new software item object and apply relevant data.
            softwareInfo.push({
              //Utilize optional chaining operator eventually
              displayName: values.DisplayName.value,
              displayVersion: values.DisplayVersion.value,
              publisher: values.Publisher.value,
            });
            resolve();
          })
          .catch((e) => {
            reject();
          });
      });
    });

    //Some promises will fail within promises array. Need to evaluate a response for this.
    Promise.allSettled(promiseArray).then(() => {
      console.log(softwareInfo);
    });
  });
}
