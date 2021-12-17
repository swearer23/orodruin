import Vue from 'vue'
import App from './App.vue'
import ELEMENT from 'element-ui'

Vue.use(ELEMENT)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
