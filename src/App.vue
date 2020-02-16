<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
    }
  },
  mounted() {
    this.getUser();
    this.getCartCount();
  },
  methods: {
    getUser(){
      this.axios.get("/user").then((res)=>{
        //取得して、todo vuexに保存
        this.$store.dispatch('saveUserName', {userName:res.username})
      })
    },
    getCartCount(){
      this.axios.get("/carts/products/sum").then((res)=>{
        //取得して、todo vuexに保存
        this.$store.dispatch('saveCartCount', res);
      })
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/reset.scss";
  @import "./assets/scss/config.scss";
  @import "./assets/scss/button.scss";
</style>
