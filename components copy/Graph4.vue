<template>
  <div class="w-full">
      <DoughnutChart :height="200" :options="options" :chartdata="chartdata" />
  </div>
</template>

<script>
import DoughnutChart from '~/components/charts/DoughnutChart.vue';

export default {
  components: {
    DoughnutChart
  },
  data() {
    return {
      options: {},
      chartdata: {
        labels: ['Manual Wallet: 45%', 'Exchange Wallet: 55%'],
        datasets: [
          {
            label: 'Issues',
            data: [45, 55],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)'
            ]
          }
        ]
      }
    };
  }
};
</script>

<style scoped></style>
