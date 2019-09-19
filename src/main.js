import Vue from 'vue'
import App from './App'
import globalPlugin from '@/utils/plugins/global'

Vue.config.productionTip = false

Vue.use(globalPlugin)

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
