import Vue from 'vue'
import App from './App.vue'
import router from './router'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import md5 from 'js-md5'

Vue.config.productionTip = false


Vue.use(ElementUI, { locale })

Vue.prototype.$md5 = md5
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
