vue-cli脚手架初始化项目：vue create 项目名称
node+webpack+淘宝镜像

node_modules文件夹：项目依赖文件

public文件夹：一般放置静态资源（图片），需要注意，放在public文件夹中的静态资源，webpack进行打包的时候，会原封不动打包到dist文件夹中

src文件夹（.程序员源代码文件夹）：
  asset文件夹：一般也是放置静态资源（一般放置多个组件共用的静态资源，），需要注意，放置在assets文件夹里面金泰资源u，在webpack打包的时候，webpack会把静态资源当做一个模块打包JS文件里面


babel.config.js:配置文件（babel相关）

package.json文件：认为项目“身份证”，记录项目叫什么、项目当中有哪些依赖、项目怎么运行。


2项目的其他配置
2.1项目运行起来的时候，让浏览器自动打开
---package.json
 "scripts": {
    "serve": "vue-cli-service serve --open --host=localhost",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },

  2.2 eslint校验关闭
  --vue.config.js
   lintOnSave:false,

  2.3src文件夹简写方法，配置别名。

  jscongfig.json配置别名


  3:项目路由的分析
  前端所谓路由key-value