// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from "element-ui"
import axios from 'axios'
import VuexAxios from 'vue-axios'
import "element-ui/lib/theme-chalk/index.css"
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
