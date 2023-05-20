1.编程式路由跳转到当前路由（参数不变），多次执行会抛出NavigationDuplicated的警告错误
--路由跳转有两种形式：声明式导航，编程式导航
--声明式导航没有这类问题的，因为vue-router底层已经处理好了
1.1为什么编程式导航进行路由跳转的时候会有这种警告？
因为router3基于promise
1.2通过给push方法传递相应的成功失败的回调函数，可以捕获到当前错误，可以解决。

1.3通过底部的代码，可以实现解决错误
this.$router.push({name:'name',params:{kwyword:this.keyword},query:{k:this.keyword.toUpperCase()}},()=>{},()=>{})
这种写法：治标不治本，将来在别的组件当中push|replace，编程式导航还是有问题