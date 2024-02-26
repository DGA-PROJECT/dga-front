// module.exports = {
//   devServer: {
//     proxy: {
//       "/api": {
//         target: "http://localhost:3000",
//         changeOrigin: true,
//         pathRewrite: {
//           "^/api": "",
//         },
//       },
//     },
//   },
// };

module.exports = {
  configureWebpack: (config) => {
    config.devServer = config.devServer || {};
    if (process.env.NODE_ENV == "development") {
      config.devServer.proxy = {
        "/api/users": {
          //여기에 배포 클러스터
          target: "http://localhost:3000",
          changeOrigin: true,
          pathRewrite: {
            "^/api/users": "",
          },
        },
        "/api/leaderboards": {
          //여기에 배포 클러스터
          target: "http://localhost:3001",
          changeOrigin: true,
          pathRewrite: {
            "^/api/leaderboards": "",
          },
        },
        "/api/search": {
          //여기에 배포 클러스터
          target: "http://localhost:3002",
          changeOrigin: true,
          pathRewrite: {
            "^/api/search": "",
          },
        },
      };
    } else {
      config.devServer.proxy = {
        "/api/users": {
          //여기에 배포 클러스터
          target: "https://www.daddygo.vacations/api/users",
          changeOrigin: true,
          pathRewrite: {
            "^/api": "",
          },
        },
        "/api/leaderboards": {
          target: "https://www.daddygo.vacations/api/leaderboards",
          changeOrigin: true,
          pathRewrite: {
            "^/api": "",
          },
        },
        "/api/search": {
          target: "https://www.daddygo.vacations/api/search",
          changeOrigin: true,
          pathRewrite: {
            "^/api": "",
          },
        },
        "/boards/write": {
          target: "https://www.daddygo.vacations/api/boards/write",
          changeOrigin: true,
          pathRewrite: {
            "^/api": "",
          },
        },
      };
    }
  },
};
