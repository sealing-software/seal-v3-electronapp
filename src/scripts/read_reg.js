// Everything below is just a demo. You can delete all of it.

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
