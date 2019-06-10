// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import MintUi from 'mint-ui'
Vue.use(MintUi)
//整个body下所有元素都没有300ms的点击延迟
fastclick.attach(document.body)

import 'mint-ui/lib/style.css'
import 'style/reset.css'
import 'style/border.css'
import 'style/animate.css'
import 'style/icon.styl'
import 'style/base.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
