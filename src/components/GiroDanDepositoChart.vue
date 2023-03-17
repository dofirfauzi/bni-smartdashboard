<template>
    <Bar
  id="giro-dan-deposito"
  :options="chartOptions"
  :data="chartData"
/>
</template>
<script>
  import { Bar } from 'vue-chartjs'

  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  export default {
      name : "GiroDanDepositoChart",
      components : { Bar },

      data() {
          return {
              chartData: {
                  labels: [ 'May 2022', 'Juni 2022', 'Juli 2022', 'Agustus 2022', 'Sept 2022', 'Oct 2022' ],
                  datasets: [ 
                      { 
                          label : "Giro",
                          backgroundColor: '#ff760a',
                          data: [250,500,575,600,750,800,],
                      },
                      { 
                          label : "Deposito",
                          backgroundColor: '#007697',
                          data: [200,300,475,500,650,700,],
                      } 
                  ]
              },
              chartOptions: {
                  responsive: true
              }
          }
      }
  }
</script>
