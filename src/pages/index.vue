<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">スマホ Cimカード</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">テレビ 何か</a>
                        </li>
                         <li class="menu-item">
                            <a href="javascript:;">テレビ 何か</a>
                        </li>
                         <li class="menu-item">
                            <a href="javascript:;">ノートパソコン</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">何か 何か</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">ルーター1</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">ルーター2</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">ルーター3</a>
                        </li>
                    </ul>
                </div>
                <swiper :options="swiperOption">
                   <swiper-slide v-for="(item, index) in slideList" :key="index">
                       <a :href="'/#/product/'+item.id"><img :src="item.img" alt=""></a>
                   </swiper-slide>
                        <div class="swiper-pagination"  slot="pagination"></div>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                        <div class="swiper-scrollbar"   slot="scrollbar"></div>
                </swiper>
            </div>
            <div class="ads-box"></div>
            <div class="banner"></div>
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>

<script>
    import ServiceBar from "../components/ServiceBar";
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
        name: "index",
        components: {
            swiper,
            swiperSlide,
            ServiceBar
        },
        data() {
            return {
                swiperOption:{
                    autoplay:true,
                    loop:true,
                    effect: "cube",
                    cubeEffect: {
                        slideShadows: true,
                        shadow: true,
                        shadowOffset:100,
                        shadowScale:0.6
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                     navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                     scrollbar: {
                        el: '.swiper-scrollbar',
                       draggable: true
                     },
                },
                slideList:[
                    {
                        id: "42",
                        img: "/imgs/slider/slide-1.jpg"
                    },
                    {
                        id: "45",
                        img: "/imgs/slider/slide-2.jpg"
                    },
                    {
                        id: "46",
                        img: "/imgs/slider/slide-3.jpg"
                    },
                    {
                        id: "47",
                        img: "/imgs/slider/slide-4.jpg"
                    },
                    {
                        id: "",
                        img: "/imgs/slider/slide-5.jpg"
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
@import "./../assets/scss/mixin.scss";
.index{
    .swiper-box{
        .nav-menu {
            position: absolute;
            width: 264px;
            height: 451px;
            z-index: 9;
            padding: 26px 0;
            background-color:#55585a7a ;
            box-sizing: border-box;
            .menu-wrap{
                .menu-item{
                    height: 50px;
                    line-height: 50px;
                    a{
                        display: block;
                        position: relative;
                        font-size: 16px;
                        color: #ffffff;
                        padding-left: 30px;
                        &:after{
                          position: absolute;
                          right: 30px;
                          top: 17.5px;
                          content: " ";
                          @include bgImg(10px,15px, '/imgs/icon-arrow.png')
                       }
                    }
                    &:hover{
                        background-color: #FF6600;
                    }
                }
            }
        }
        .swiper-container {
            height: 451px;
            .swiper-button-prev{
                left: 274px;
            }
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
