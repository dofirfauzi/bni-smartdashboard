<template>
    <Line
  id="tren-bunga-netto"
  :options="chartOptions"
  :data="chartData"
/>
</template>
<script>

  import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
  import { Line } from 'vue-chartjs'

  ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip,Legend
)

  export default {
      name : "TrenBungaNetto",
      components : { Line },

      data() {
          return {
              chartData: {
                  labels: [ 'May 2022', 'Juni 2022', 'Juli 2022', 'Agustus 2022', 'Sept 2022', 'Oct 2022' ],
                  datasets: [ 
                      { 
                          label : "Tren Pendapatan Bunga Netto",
                          backgroundColor: '#ff760a',
                          data: [250,500,575,600,750,800,],
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
