const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
 // publicPath: process.env.NODE_ENV === "production" ? "D:\Project\vischart" : "/",
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
      port: 8081,
      // proxy: {
      //   "/api": {
      //     target: "https://api.github.com",
      //     changeOrigin: true,
      //     ws: false,
      //     pathRewrite: {
      //       "^/api": ""
      //     }
      //   }
      // }
  },
  configureWebpack: {
      // ��ԭ����Ҫд��webpack.config.js�е����ô��� д������ ���Զ��ϲ�
      externals: {
          'jquery': '$',
          'echarts': 'echarts',
          'axios': 'axios'
      }
  }
};