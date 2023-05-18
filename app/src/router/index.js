//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';

//使用插件
Vue.use(VueRouter)

//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

//配置路由
export default new VueRouter({
    //配置路由
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true},
            name:'name'
        },
        {   
            path:"/search/:keyword?",
            component:Search,
            meta:{show:true},
            name:'search',
            //传递props数据，布尔值写法：params，传递过去的是params参数，在相应的路由组件接收
            //props:true
            //对象写法 额外的传递一些props
            //props:{a:1,b:2}
            //函数写法：可以params参数，query参数，荣股哟props传递给路由组件
            //这个箭头函数的参数是header路由里的this.$route
            // props:(route)=>{
            //     return {keyword:route.params.keyword}
            // }
            //简写形式
            props:(route)=>({keyword:route.params.keyword})
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false},
            name:'login'
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false},
            name:'register'
        },
        //重定向，在项目跑起来的时候，访问/，立马让他定向道首页
        {
            path:'*',
            redirect:"/home",
            
        }
    ]
})