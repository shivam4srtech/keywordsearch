    (function() {
      const options = {
        chart: {
          type: 'line',
          height: 400,
          toolbar: { show: false },
          zoom: { enabled: false }
        },
        series: [{
          name: 'Backlinks',
          data: [300, 340, 370, 420, 460, 500, 480, 520, 580, 600, 650, 700]
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
            text: 'Backlinks',
            style: { fontWeight: 600 }
          },
          min: 0
        },
        stroke: {
          curve: 'smooth',
          width: 3,
          colors: ['#f5e368']
        },
        markers: {
          size: 6,
          colors: ['#fff'],
          strokeColors: '#f5e368',
          strokeWidth: 3,
          hover: { size: 8 }
        },
        colors: ['#f5e368'],
        grid: {
          borderColor: '#eee',
          strokeDashArray: 4
        },
        tooltip: {
          theme: 'light',
          y: {
            formatter: val => val + " links"
          }
        }
      };

      const chart = new ApexCharts(document.querySelector("#backlinksChart"), options);
      chart.render();
    })();