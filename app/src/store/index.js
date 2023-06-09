import Vue from "vue";
import Vuex from 'vuex';
//需要使用一次插件
Vue.use(Vuex);
//对外暴露Store类的一个实例
export default new Vuex.Store({
    //仓库存储数据的地方
    state:{},
    //修改state的唯一手段
    mutations:{},
    //处理action，可以书写自己的业务逻辑，也可以处理异步
    actions:{},
    //getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
    getters:{},
})