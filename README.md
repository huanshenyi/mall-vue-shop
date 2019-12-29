クロスドメイン
```javascript
CORS -backendのみセッティング
```
jsonp
```javascript
//npm i jsonp --save-dev
    let url = "/book/v1/list";
    jsonp(url, (err, res) => {
        let result = res;
        this.data = result
    })
```
プロキシ
```javascript
// vue.config.js (commonjsの書き方)
module.exports = {
  devServer: {
     host: 'localhost',
     port: 8080,
     proxy: {
       // apiを統一管理するための　prefix(接頭辞)
       '/api':{
         target: 'http://localhost:3000',
         changeOrigin: true,
         pathRewrite: {
             //prefixを省く
             '/api': ''
         }
       }
     }
  }
};
// vue
  let url = "/api/book/v1/list";
    jsonp(url, (err, res) => {
        let result = res;
        this.data = result
    })
  }
```
