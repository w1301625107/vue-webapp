import Vue from 'vue'
import App from './App.vue'
//import router from './router'
//import store from './store';
//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
//import axios from './axios'
//访问前权限控制
//import '@/permission' // permission control

//import {imageUrlFmt,dateFmt} from './filters/format.js'
//注册全局过滤器
//Vue.filter('imageUrlFmt',imageUrlFmt);
//Vue.filter('dateFmt',dateFmt);


Vue.config.productionTip = false
//Vue.use(ElementUI)
//Vue.prototype.$axios=axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
//  router,
//  store,
  components: { App },
  template: '<App/>'
})
