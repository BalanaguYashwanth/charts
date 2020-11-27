<template>
<div>

      <p> latest values are :-
        temperature:{{temperature1}},
        humidity:{{humidity1}},
        pressure:{{pressure1}},
     </p>

    <GChart
        :settings="{ packages: ['corechart', 'gauge'] }"
        type="Gauge"
        :data="chartData4"
        :options="chartOptions1"
    />

    <GChart
        type="AreaChart"
        :data="chartData3"
        :options="chartOptions"
    />

</div>
</template>

<script>
import axios from 'axios';
  export default {
    data () {
      return {
        alldatas:'',
        temperature1:'',
        humidity1:'',
        pressure1:'',
        //samplearray:[],
        chartData3: [
        ['Year', 'temperature', 'humidity', 'pressure'],
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'temperature, humidity, and pressure',
        }
      },

    
    chartData4: [
        ['Label', 'Value'],
      ],
      chartOptions1: {
        chart: {
          title: 'Company Performance',
          subtitle: 'temperature, humidity, and pressure',
        }
      },


      }
    },

  methods:{



  },

   created(){
    axios.get('https://chart-django.herokuapp.com/api/addv/')
    .then(res=>{
      console.log(res.data)
      let result=res.data
      for(let data in result)
      {
        console.log(result[data].timestamp,result[data].temperature,result[data].humidity,result[data].pressure)
        this.chartData3.push([result[data].timestamp,result[data].temperature,result[data].humidity,result[data].pressure])
        this.temperature1=result[data].temperature
        this.humidity1=result[data].humidity
        this.pressure1=result[data].pressure
      }

      this.chartData4.push(['temperature',this.temperature1])
      this.chartData4.push(['humidity',this.humidity1])
      this.chartData4.push(['presssure',this.pressure1])

      this.alldatas=res.data
      })
    .catch(err=>console.log(err))
  }



  }
</script>
