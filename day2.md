1.编程式路由跳转到当前路由（参数不变），多次执行会抛出NavigationDuplicated的警告错误
--路由跳转有两种形式：声明式导航，编程式导航
--声明式导航没有这类问题的，因为vue-router底层已经处理好了
1.1为什么编程式导航进行路由跳转的时候会有这种警告？
因为router3基于promise
1.2通过给push方法传递相应的成功失败的回调函数，可以捕获到当前错误，可以解决。

1.3通过底部的代码，可以实现解决错误
this.$router.push({name:'name',params:{kwyword:this.keyword},query:{k:this.keyword.toUpperCase()}},()=>{},()=>{})
这种写法：治标不治本，将来在别的组件当中push|replace，编程式导航还是有问题


2：Home模块组件拆分
--先把静态页面完成
--才分出静态组件
--获取服务器数据

3：三级联动组件完成
--由于三级联动，在Home、Search、Detail，把三级联动注册为全局组件。


6:  axios二次封装
XMLHttpRequest、fetch、jq、axios
为什么要二次封装axios？
请求拦截器、响应拦截器：请求拦截器，可以在发请求之前处理一些业务、响应拦截器，当服务器数据返回以后可以处理一些事情

6.2在项目当中经常API文件夹【axios】
接口昂中：路径都待带有/api
baseURL:'/api'

AXIOS不会的话，可以参考git Npm关于axios文档

7.1跨域问题

什么是跨域：协议、域名、端口好不同请求，称之为跨域

解决方法 代理


8:nprogress进度条的使用

9：vuex状态管理库
9.1vuex是什么
vuex是官方提供的一个插件，状态管理库，集中式该你了项目中共用的数据