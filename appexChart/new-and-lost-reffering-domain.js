
    (function() {
      const options = {
        chart: {
          type: 'bar',
          height: 400,
          toolbar: { show: false },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '45%',
            borderRadius: 0,
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        series: [
          {
            name: 'New Domains',
            data: [40, 60, 80, 100, 90, 120, 150, 130, 160, 170, 180, 200]
          },
          {
            name: 'Lost Domains',
            data: [20, 30, 40, 60, 50, 70, 90, 60, 70, 80, 75, 90]
          }
        ],
        colors: ['#28c76f', '#ff4d4d'], // Green for new, red for lost
        xaxis: {
          categories: [
            'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025',
            'Mar 2025', 'Apr 2025', 'May 2025', 'Jun 2025',
            'Jul 2025', 'Aug 2025', 'Sept 2025', 'Oct 2025'
          ],
          title: {
            text: 'Months',
            style: { fontWeight: 600 }
          }
        },
        yaxis: {
          title: {
            text: 'Number of Referring Domains',
            style: { fontWeight: 600 }
          },
          min: 0
        },
        grid: {
          borderColor: '#eee',
          strokeDashArray: 4
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          markers: {
            radius: 4
          }
        },
        tooltip: {
          y: {
            formatter: val => val + " domains"
          }
        }
      };

      const chart = new ApexCharts(document.querySelector("#referringDomainsChart"), options);
      chart.render();
    })();