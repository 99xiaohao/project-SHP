//当前的这个模块：API进行统一管理
import requests from './request';

//三级联动接口
// /api/product/getBaseCategoryList  get请求 无参数

export const reqCategoryList = ()=>{
    //发请求:axios发请求返回结果Promise
   return requests({url:'/product/getBaseCategoryList',method:'get'})
}

//http://39.98.123.211/api/product/getBaseCategoryList