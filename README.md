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
使用ライブラリ
```javascript
npm i vue-lazyload --save-dev
npm i element-ui --save-dev
npm i node-sass --save-dev
npm i sass-loader --save-dev
npm i vue-awesome-swiper --save-dev
npm i vue-axios --save-dev
npm i vue-cookie --save-dev
```
# Storageのパッケージ化

```shell script
Cookie,
localStorage,
sessionStorage
```
Cookie と　localStorage
 - Cookie4k, Storage5M
 - Cookieは期限あり、Storage期限無し
 - Cookieはサーバーサイドへおくり、メモリに保存される、storageはブラウザに保存される
 
Storageのパッケージ
 - Storage　Api存在するが、key/valueの簡単形式
 - 文字列しか保存してません、jsonへ変える必要がある
  
