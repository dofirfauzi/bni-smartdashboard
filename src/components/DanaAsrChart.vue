<template>
      <Bar
    id="dana-asr-chart"
    :options="chartOptions"
    :data="chartData"
  />
</template>
<script>
    import { Bar } from 'vue-chartjs'

    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

    export default {
        name : "DanaAsrChart",
        components : { Bar },

        data() {
            return {
                chartData: {
                    labels: [ 'Dec-2017', 'Dec-2018', 'Dec-2019', 'Dec-2020', 'Dec-2021', 'Dec-2022' ],
                    datasets: [ 
                        { 
                            label : "Total Dana ASR",
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
