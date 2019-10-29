// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from '@/api/http' //vue项目对axios的全局配置
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import echarts from 'echarts'


Vue.use(ElementUI)
Vue.prototype.$echarts=echarts;
Vue.config.productionTip = false

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data: function(){
    return {
      Bus: new Vue()
    }
  }
})
