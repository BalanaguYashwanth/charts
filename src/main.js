import Vue from 'vue'
import App from './App.vue'
import Vuerouters from 'vue-router'
import Routers from './routers'
import Vuex from 'vuex' 
import VCharts from 'v-charts'
import VeLine from 'v-charts/lib/line.common'
import {store} from './store/store'
import VueGoogleCharts from 'vue-google-charts'
 
Vue.use(VueGoogleCharts)
Vue.component(VeLine.name, VeLine)
Vue.use(VCharts)
Vue.use(Vuerouters)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:Routers,
  store:store
}).$mount('#app')
