<template>
    <div>
       {{this.$store.state.datas}}
        <h1> hello world </h1>
        <input type="text" v-model="name1">
        {{name1}}
    <button v-on:click="posting" > submit  </button>
    </div>

</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            name1:'',

        }
    },

    methods:{
        posting:function(){

            axios.post('https://alarm-a709f.firebaseio.com/api.json',{
                name1:this.name1
            })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
        }
    },

async created(){

      await this.$store.dispatch("getdata");



}
}


</script>

<style>

</style>
