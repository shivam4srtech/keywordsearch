 (function() {
      const options = {
        chart: {
          type: 'line',
          height: 400,
          toolbar: { show: false },
          zoom: { enabled: false }
        },
        series: [{
          name: 'Domain Authority',
          data: [120, 90, 140, 165, 190, 210, 180, 225, 260, 300, 285, 320]
        }],
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
            text: 'Domain Authority',
            style: { fontWeight: 600 }
          },
          min: 0
        },
        stroke: {
          curve: 'smooth',
          width: 3,
          colors: ['#83B6F8']
        },
        markers: {
          size: 6,
          colors: ['#fff'],
          strokeColors: '#83B6F8',
          strokeWidth: 3,
          hover: { size: 8 }
        },
        colors: ['#83B6F8'],
        grid: {
          borderColor: '#eee',
          strokeDashArray: 4
        },
        tooltip: {
          theme: 'light',
          y: {
            formatter: val => val + " score"
          }
        }
      };

      const chart = new ApexCharts(document.querySelector("#domainAuthorityChart"), options);
      chart.render();
    })();