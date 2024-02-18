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
        "/api": {
          //여기에 배포 클러스터
          target: "http://localhost:3000",
          changeOrigin: true,
          pathRewrite: {
            "^/api": "",
          },
        },
      };
    } else {
      config.devServer.proxy = {
        "/api": {
          //여기에 배포 클러스터
          target: "https://www.daddygo.vacations/api",
          changeOrigin: true,
          pathRewrite: {
            "^/api": "",
          },
        },
      };
    }
  },
};
