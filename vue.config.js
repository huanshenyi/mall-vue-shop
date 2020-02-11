// node commonjs
module.exports = {
  devServer: {
     host: 'localhost',
     port: 8080,
     proxy: {
       '/api':{
         // target: 'http://localhost:3000',
         target: 'http://mall-pre.springboot.cn',
         changeOrigin: true,
         pathRewrite: {
             '/api': ''
         }
       }
     }
  },

  lintOnSave: false
};
