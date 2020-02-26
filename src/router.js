import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
// import Order from './pages/order'
// import Login from './pages/login'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component: Home,
            redirect: '/index',
            children:[
                {
                     path:'/index',
                     name:'index',
                     component: Index,
                }, {
                    path: '/product/:id',
                    name: 'product',
                    component: () => import('./pages/product')
                },{
                    path: '/detail/:id',
                    name: 'detail',
                    component: () => import('./pages/detail')
                }
            ]
        },
        {
            path: '/cart',
            name: 'cart',
            component: ()=> import('./pages/cart')
        },
        {
            path: '/login',
            name: 'login',
            component: resolve => require(['./pages/login.vue'], resolve),
        },
        {
            path: '/order',
            name: 'order',
            component: () => import('./pages/order'),
            children:[
                {
                    path: 'list',
                    name: 'order-list',
                    component: ()=> import('./pages/orderList')
                },
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: ()=> import('./pages/orderConfirm')
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: () => import('./pages/orderPay')
                },
                {
                   path: 'alipay',
                   name: 'alipay',
                   component: () => import('./pages/alipay')
                }
            ]
        }
    ]
})
