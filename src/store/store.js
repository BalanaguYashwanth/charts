import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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

        getdata:function(context){
            axios.get('https://alarm-a709f.firebaseio.com/api.json')
            .then(res=>{
                console.log(res)
                context.commit('data',res.data)
            })
            .catch(err=>console.log(err))
        }

    }

    

})  

