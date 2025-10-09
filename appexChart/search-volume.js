var options = {
      chart: {
        type: 'area',
        height: 350,
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      series: [{
        name: 'Search Volume',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 20000, 30000, 40000, 38000]
      }],
      colors: ['#f5e368'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.1,
          stops: [0, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      markers: {
        size: 5,
        colors: ['#f5e368'],
        strokeWidth: 2,
        strokeColors: '#fff'
      },
      xaxis: {
        categories: [
          'OCT 2024', 'NOV 2024', 'DEC 2024', 'JAN 2025', 'FEB 2025', 
          'MAR 2025', 'APR 2025', 'MAY 2025', 'JUN 2025', 'JUL 2025', 
          'AUG 2025', 'SEP 2025'
        ],
        labels: {
          style: { colors: '#888', fontSize: '12px' }
        }
      },
      yaxis: {
        labels: {
          formatter: val => val.toLocaleString(),
          style: { colors: '#888', fontSize: '12px' }
        }
      },
      grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 4
      },
      tooltip: {
        y: { formatter: val => val.toLocaleString() }
      }
    };

    var chart = new ApexCharts(document.querySelector("#searchVolumeChart"), options);
    chart.render();