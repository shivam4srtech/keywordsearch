
    (function() {
      const options = {
        chart: { type: 'donut', height: 320 },
        series: [80, 20],
        labels: ['Organic', 'Paid'],
        colors: ['#7B42F6', '#EF7C41'],
        legend: { position: 'bottom' },
        dataLabels: {
          enabled: true,
          formatter: val => val.toFixed(0) + "%"
        },
        plotOptions: {
          pie: {
            donut: {
              size: '70%',
              labels: {
                show: true,
                total: { show: true, label: 'Total', formatter: () => '100%' }
              }
            }
          }
        }
      };
      const chart = new ApexCharts(document.querySelector("#donutChart1"), options);
      chart.render();
    })(); // <— Scoped function end
 