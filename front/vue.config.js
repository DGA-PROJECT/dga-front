const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  filenameHashing: true,
  configureWebpack: (config) => {
    config.output.filename = "js/[name].[hash].js";
    config.output.chunkFilename = "js/[name].[hash].js";

    // 추가한 부분 시작
    config.devServer = config.devServer || {};
    config.devServer.proxy = {
      "/api/users": {
        target:
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : "https://www.daddygo.vacations/api/users",
        changeOrigin: true,
        pathRewrite: {
          "^/api/users": "",
        },
      },
      "/api/leaderboards": {
        target:
          process.env.NODE_ENV === "development"
            ? "http://localhost:3001"
            : "https://www.daddygo.vacations/api/leaderboards",
        changeOrigin: true,
        pathRewrite: {
          "^/api/leaderboards": "",
        },
      },
      "/api/search": {
        target:
          process.env.NODE_ENV === "development"
            ? "http://localhost:3002"
            : "https://www.daddygo.vacations/api/search",
        changeOrigin: true,
        pathRewrite: {
          "^/api/searches": "",
        },
      },
    };
    // 추가한 부분 끝
  },
});
