<template>
 <div class="login">
     <div class="container">
         <a href="/#/index">
             <img src="/imgs/login-logo.png" alt="">
         </a>
     </div>
     <div class="wrapper">
         <div class="container">
             <div class="login-form">
                  <h3>
                      <span class="checked">ログイン</span><span class="sep-line">|</span><span>QRコード</span>
                  </h3>
                  <div class="input">
                      <input type="text" placeholder="アカウント" v-model="username">
                  </div>
                  <div class="input">
                      <input type="password" placeholder="パスワード" v-model="password">
                  </div>
                  <div class="btn-box">
                    <a href="javascript:;" class="btn" @click="login">ログイン</a>
                  </div>
                  <div class="tips">
                    <div class="sms" @click="register">新規アカウント</div>
                    <div class="reg">新規登録<span>|</span>パスワード忘れた？</div>
                  </div>
             </div>
         </div>
     </div>
     <div class="footer">
      <div class="footer-link">
        <a href="#" target="_blank">何か</a><span>|</span>
        <a href="#" target="_blank">何か</a><span>|</span>
        <a href="#" target="_blank">何か</a><span>|</span>
        <a href="#" target="_blank">何か</a>
      </div>
      <p class="copyright">Copyright ©2020 xxx</p>
    </div>
 </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: "login",
        data(){
            return {
                username: '',
                password: '',
                userId: '',
                res: {}
            }
        },
        methods: {
            login() {
                this.axios.post('/user/login', {
                    username:this.username,
                    password:this.password
                }).then((res)=>{
                    this.res = res;
                    this.$cookie.set('userId', res.id, {expires: '1M'});
                    // to-do ユーザーネームをvuexに保存
                    // this.$store.dispatch("saveUserName", {userName:this.username});
                    this.saveUserName({userName:this.username});
                    this.$router.push('/');
                }).catch((err)=>{
                    console.log(err)
                })
            },
            ...mapActions([
                "saveUserName"
            ]),
            register(){
                this.axios.post('/user/login', {
                    username:'何か',
                    password:'何か',
                    email: '何かのメールアドレス'
                }).then(()=>{
                    alert('成功')
                })
            }
        }
    }
</script>

<style lang="scss">
.login{
    &>.container{
        height: 113px;
        img{
            width: auto;
            height: 100%;
        }
    }
.wrapper{
    background:url('/imgs/login-bg.jpg') no-repeat center;
    .container{
      height:576px;
      .login-form{
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width:410px;
        height:510px;
        background-color:#ffffff;
        position:absolute;
        bottom:29px;
        right:0;
        h3{
          line-height:23px;
          font-size:24px;
          text-align:center;
          margin:40px auto 49px;
          .checked{
            color:#FF6600;
          }
          .sep-line{
            margin:0 32px;
          }
        }
        .input{
          display:inline-block;
          width:348px;
          height:50px;
          border:1px solid #E5E5E5;
          margin-bottom:20px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn{
          width:100%;
          line-height:50px;
          margin-top:10px;
          font-size:16px;
        }
        .tips{
          margin-top:14px;
          display:flex;
          justify-content:space-between;
          font-size:14px;
          cursor:pointer;
          .sms{
            color:#FF6600;
          }
          .reg{
            color:#999999;
            span{
              margin:0 7px;
            }
          }
        }
      }
    }
  }
  .footer{
    height:100px;
    padding-top:60px;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      margin-top:13px;
    }
  }
}
</style>
