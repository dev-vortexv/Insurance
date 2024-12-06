// ===========================|| DASHBOARD - TOTAL GROWTH BAR CHART ||=========================== //

const policyGraphData = [
  { name: 'Auto Insurance', data: [12, 18, 23, 35, 27, 20, 34, 20, 35, 29, 15, 21] },
  { name: 'Health Insurance', data: [26, 15, 12, 30, 18, 30, 28, 25, 15, 15, 25, 42] },
  { name: 'Home Insurance', data: [18, 19, 35, 31, 20, 26, 33, 10, 34, 45, 30, 10] },
  { name: 'Life Insurance', data: [16, 34, 19, 32, 23, 26, 15, 30, 20, 28, 27, 30] }
];

const chartData = {
  height: 480,
  type: 'bar',
  options: {
    chart: {
      id: 'bar-chart',
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%'
      }
    },
    xaxis: {
      type: 'category',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    legend: {
      show: true,
      fontSize: '14px',
      fontFamily: `'Roboto', sans-serif`,
      position: 'bottom',
      offsetX: 20,
      labels: {
        useSeriesColors: false
      },
      markers: {
        width: 16,
        height: 16,
        radius: 5
      },
      itemMargin: {
        horizontal: 15,
        vertical: 8
      }
    },
    fill: {
      type: 'solid'
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      show: true
    }
  },
  series: policyGraphData
};
export default chartData;
