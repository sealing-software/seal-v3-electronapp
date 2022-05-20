const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      preload: "src/preload.js",
      extraResources: [
        {
          from: "../vbs",
          to: "vbs",
          filter: ["**/*", "!*.mp3"],
        },
      ],

      asar: false,
    },
  },
});
