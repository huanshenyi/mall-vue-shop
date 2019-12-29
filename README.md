クロスドメイン
```javascript
CORS -backendのみセッティング
VPN
```
jsonp
```javascript
//npm i jsonp --save-dev
    let url = "http://localhost:3000/book/v1/list";
    jsonp(url, (err, res) => {
        let result = res;
        this.data = result
    })
```
