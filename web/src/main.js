// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
/*import 'bootstrap'*/
/*import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'*/
import '../src/assets/css/common.css'
import Chinese from '../src/assets/js/Chinese.js'
import English from '../src/assets/js/english.js'
import Korean from '../src/assets/js/Korean.js'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import vuescroll from 'vuescroll'
import 'vuescroll/dist/vuescroll.css'
Vue.use(vuescroll)
Vue.use(ElementUI)
Vue.use(axios)
Vue.use(iView, {
  transfer: true
})
Vue.use(VueI18n)
const i18n = new VueI18n({
 locale: 'korean', // 默认语言
 messages: {
  'zh': Chinese,
  'en': English,
  'korean': Korean
 }
})

Vue.prototype.$http = axios
Vue.use($)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
