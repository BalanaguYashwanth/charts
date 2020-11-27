
import chart from './components/chart'
import user from './components/user'
import Vue from 'vue'
import Vuerouter from 'vue-router'
Vue.use(Vuerouter)

const router = new Vuerouter({
    mode:'history',
    routes:[
        {path:'/chart',name:'chart',component:chart},
        {path:'/user',name:'user',component:user},
    ]
})

export default router
