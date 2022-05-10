import "./stylesheets/main.css";

// Everything below is just a demo. You can delete all of it.

import { ipcRenderer } from "electron";
import jetpack from "fs-jetpack";
import { greet } from "./hello_world/hello_world";
import env from "env";
import registry from "windows/lib/registry";

const osMap = {
  win32: "Windows",
  darwin: "macOS",
  linux: "Linux",
};

// We can communicate with main process through messages.
ipcRenderer.on("app-path", (event, appDirPath) => {
  // Holy crap! This is browser window with HTML and stuff, but I can read
  // files from disk like it's node.js! Welcome to Electron world :)
  const appDir = jetpack.cwd(appDirPath);
  const manifest = appDir.read("package.json", "json");
});
ipcRenderer.send("need-app-path");

document.querySelector("#regLoad").addEventListener(
  "click",
  (event) => {
    ipcRenderer.send("test", event.target.href);
    event.preventDefault();
  },
  false
);

var regKey = "HKLM\\software\\Microsoft\\Windows\\CurrentVersion\\Uninstall";

const regedit = require("regedit").promisified;
regedit.list(regKey).then((response) => {
  let appList = response[regKey].keys;
  appList.forEach((appName) => {
    let appKey = regKey + "\\" + appName;
    regedit.list(appKey).then((response) => {
      console.log(response[appKey].values.DisplayName.value);
    });
  });
});
