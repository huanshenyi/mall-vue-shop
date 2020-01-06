<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">miShop</a>
                    <a href="javascript:;">miShop</a>
                    <a href="javascript:;">miShop</a>
                    <a href="javascript:;">概要</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;">ログイン</a>
                    <a href="javascript:;">会員登録</a>
                    <a href="javascript:;" class="my-cart">
                        <span class="icon-cart"></span>
                        買い物かご
                    </a>
                </div>
            </div>
        </div>
        <div class="nav-header">
           <div class="container">
             <div class="header-logo">
                 <a href="/#/index"></a>
             </div>
             <div class="header-menu">
                 <div class="item-menu">
                     <span>無料作品</span>
                     <div class="children">
                         <ul>
                             <li class="product">
                                 <a href="" target="_blank">
                                   <div class="pro-img">
                                       <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                                   </div>
                                   <div class="pro-name">MiCC9</div>
                                   <div class="pro-price">1799元</div>
                                 </a>
                             </li>
                             <li class="product">
                                 <a href="" target="_blank">
                                   <div class="pro-img">
                                       <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                                   </div>
                                   <div class="pro-name">MiCC9</div>
                                   <div class="pro-price">1799元</div>
                                 </a>
                             </li>
                             <li class="product">
                                 <a href="" target="_blank">
                                   <div class="pro-img">
                                       <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png" alt="">
                                   </div>
                                   <div class="pro-name">MiCC9</div>
                                   <div class="pro-price">1799元</div>
                                 </a>
                             </li>
                         </ul>
                     </div>
                 </div>
                 <div class="item-menu">
                     <span>新刊・予約</span>
                     <div class="children"></div>
                 </div>
                 <div class="item-menu">
                     <span>ランキング</span>
                     <div class="children"></div>
                 </div>
                  <div class="item-menu">
                     <span>セール中</span>
                     <div class="children"></div>
                 </div>
             </div>
             <div class="header-search">
                 <div class="wrapper">
                     <input type="text" name="keyword">
                     <a href="javascript:;"></a>
                 </div>
             </div>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavHeader"
    }
</script>

<style lang="scss">
    @import 'src/assets/scss/base.scss';
    @import 'src/assets/scss/mixin.scss';
    @import 'src/assets/scss/config.scss';
.header{
  .nav-topbar{
      height: 39px;
      line-height: 39px;
      background-color: #333333;
      color: #B0B0B0;
      .container{
       @include flex();
      a{
          display: inline-block;
          color: #B0B0B0;
          margin-right: 17px;
      }
      .my-cart {
          width: 110px;
          background-color: #FF6600;
          text-align: center;
          color: #ffffff;
          .icon-cart{
              @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
              margin-right: 4px;
          }
      }
    }
  }
  .nav-header{
      .container{
          position: relative;
          height: 112px;
          @include flex();
          .header-logo{}
          .header-menu{
              display: inline-block;
              width: 643px;
              padding-left: 209px;
              .item-menu{
                  display: inline-block;
                  color: #333333;
                  font-weight: bold;
                  font-size: 16px;
                  line-height: 112px;
                  margin-right: 20px;
                  span{
                      cursor: pointer;
                  }
                  &:hover{
                    color: $colorA;
                    .children{
                       height: 220px;
                    }
                  }
                  .children{
                      position: absolute;
                      top: 112px;
                      left: 0;
                      width: 1226px;
                      border-top: 1px solid #e5e5e5;
                      box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
                      z-index: 10;
                      height: 220px;
                      .product{
                          position: relative;
                          float: left;
                          width: 16.6%;
                          height: 220px;
                          font-size: 12px;
                          line-height: 12px;
                          text-align: center;
                          a{
                              display: inline-block;
                          }
                          img{
                              width: auto;
                              height: 111px;
                              margin-top: 26px;
                          }
                          .pro-img{
                              height: 137px;
                          }
                          .pro-name{
                              font-weight: bold;
                              margin-top: 19px;
                              margin-bottom: 8px;
                              color: $colorB;
                          }
                          .pro-price{
                              color: $colorA;
                          }
                          &:before{
                              content: ' ';
                              position: absolute;
                              top: 28px;
                              right: 0;
                              border-left: 1px solid $colorF;
                              height: 100px;
                              width: 1px;
                          }
                          &:last-child:before{
                              display: none;
                          }
                      }
                  }
              }
          }
          .header-search{
             width: 319px;
              .wrapper{
                  height: 50px;
                  border: 1px solid #E0E0E0;
                  display: flex;
                  align-items: center;
                  input{
                      border: none;
                      box-sizing: border-box;
                      border-right: 1px solid #E0E0E0;
                      width: 264px;
                      height: 50px;
                      padding-left: 14px;
                  }
                  a{
                      @include bgImg(18px, 18px ,'/imgs/icon-search.png');
                      margin-left: 17px;
                  }
              }
          }
      }
  }
}
</style>
