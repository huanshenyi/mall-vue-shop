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
 
# responseのinterceptor
```shell script
テンプレート
//0はエラーない
//10はログインしてない
{
  status:0,
  data: [],
  msg: ''
}

mainjsでインターセプター設定する時に
リダイレクトは以下の使用
window.location.href = '/'

ベースurlの設定
フロントエンドのクロスドメインによって調整する
jsonp or 他使用する際に
axios.defaults.baseURL = 'フルパス/';
proxy使用する際に
axios.defaults.baseURL = '/api';
```
# requestのinterceptor
```shell script
暇あったらやろう
```

# 環境変数のセット
```javascript
 以下のmodeは環境変数
 "serve": "vue-cli-service serve --mode"

//main.js
//もしjsonpとクロスドメイン使用していれば,以下のが必要
import env from './env'
axios.defaults.baseURL = env.baseURL;

modeのカスタマイズは
.env.[カスタマイズ変数]が必要
中身は
NODE_ENV='カスタマイズ変数'

```
moke.jsはまぁまぁいいかも

# 画像の使用
```javascript
// no-repeat繰り返さない
background: url("") no-repeat center;

background-size: contain
```

# Scssの関数
### scss
```javascript
@mixin flex($hov:space-between,$col:center){
  display:flex;
  justify-content:$hov;
  align-items:$col;
}
```
### vue
```javascript
 @import 'src/assets/scss/mixin.scss';
 ...
 .container{
       @include flex();
 ...
```

### vue-lazyload(画像の部分的ロード)
リポジトリ: https://www.npmjs.com/package/vue-lazyload
```javascript
npm i vue-lazyload --save-dev
```

### vue-cookieの文法

```javascript
https://www.npmjs.com/package/vue-cookie
```

### Vuex-メモ
```javascript
mapState === this.$store.state

computed: mapState([
 'count'
])
オブジェクトスプレッド演算子によって実現された

```
### よりいいアニメーションライブラリ

```javascript
https://daneden.github.io/animate.css/
```
