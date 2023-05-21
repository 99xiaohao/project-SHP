import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router/index';
//三级联动组件---全局组件
import TypeNav from '@/pages/Home/TypeNav';

import { reqCategoryList } from '@/api/index';
reqCategoryList()
//第一个参数：全局组件的名字， 第二个参数：那个组件
Vue.component(TypeNav.name,TypeNav)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由：底下的写法KV一致省略V{router小写的}
  router
}).$mount('#app')

