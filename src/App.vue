<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
import jsonp from 'jsonp'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data () {
    return {
      data :'',
    }
  },
  mounted() {
    let url = "http://localhost:3000/book/v1/list";
    // axios.get(url).then((res)=>{
    //   console.log(res.data)
    // });
    jsonp(url, (err, res) => {
        let result = res;
        this.data = result
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
