import Vue from 'vue'
import App from './App'
import router from './routers'
import '../scss/index.scss'
//import store from './store';
//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
import api from './api/index'
//访问前权限控制
//import '@/permission' // permission control

//注册全局过滤器
import {
  dateFmt,
  fixImages403
} from './filters/format.js'
Vue.filter('dateFmt', dateFmt);
Vue.filter('fixImages403', fixImages403);


//注册全局方法
const Api = {
  install(Vue, options) {
    Vue.prototype.$api = api
  }
}

const Fiximage = {
  install(Vue, options) {
    Vue.prototype.$fixImage = fixImages403
  }
}

Vue.use(Api);
Vue.use(Fiximage);
Vue.config.devtools = true;
//Vue.config.productionTip = false
//Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //  store,
  components: {
    App
  },
  template: '<App/>'
})