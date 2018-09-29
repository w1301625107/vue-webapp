import Vue from 'vue'
import App from './App'
import router from './routers'
import '../scss/index.scss'
//import store from './store';
import api from './api/index'

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

//另一种注册全局组件的方式
// const divider = {
//   install: function (Vue) {
//     Vue.component('divider', 
//template: '<div class="divide"></div>'
//})
//   }  
// };
//Vue.use(divider);

//注册全局分割线组件
Vue.component("divider", {
  template: '<div class="divide"></div>'
})

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