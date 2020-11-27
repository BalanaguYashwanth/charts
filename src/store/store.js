import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict:true,
    state:{
        datas:[],
    },

    getters:{

    },

    mutations:{

        data:function(state,data){
            state.datas=data
        }

    },

    actions:{

        

    }

    

})  

