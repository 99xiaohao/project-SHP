module.exports = {
  //关闭eslilt
  lintOnSave:false,
  //代理跨域
  devServer:{
   proxy:{
     '/api':{
       target:'http://gmall-h5-api.atguigu.cn',
       changeOrigin:true,
       // pathRewrite:{'^/api':''},
     }
   }
  },
}