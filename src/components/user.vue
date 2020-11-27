<template>
    <div>
        <h1> Sensor Values </h1>

            Temperature
            <input type="text" v-model="temp" required>
            <br>
            humidity
            <input type="text" v-model="humidity" required>
            <br>
            pressure
            <input type="text" v-model="pressure" required>
            <br>
            Time 
            <input type="text" v-model="time" required>
            <br>
            <button v-on:click="submit"> submit</button>
        <br>
        <br>
        Note:Please fill up all the inputs 

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            temp:'',
            humidity:'',
            pressure:'',
            time:'',
        }
    },

    methods:{
        submit:function(){
            
            axios.post('https://chart-django.herokuapp.com/api/addv/',{
                temperature:this.temp,
                humidity:this.humidity,
                pressure:this.pressure,
                timestamp:this.time,
            })
            .then(res=>{
                console.log(res)
                this.$router.push('chart');
                })
            .catch(err=>console.log(err))
           
        }
    }
}
</script>

<style>

</style>