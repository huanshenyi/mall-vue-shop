import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from "vue-axios";
import store from './store'
import router from './router'

// フロントエンドのクロスドメインによって調整する /a/b : /api/a/b => /a/b
axios.defaults.baseURL = '/api';
// タイムアウト
axios.defaults.timeout = 8000;
//インターセプター エラーなければ、data返す
axios.interceptors.response.use( (response) => {
  let res = response.data;
  if(res.status === 0){
    return res.data;
  }else if (res.status === 10){
    // main.jsにルート使えないのでhrefを使用
    window.location.href = '/#/login';
  }else {
    alert(res.msg);
  }
});

Vue.use(VueAxios,axios);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
