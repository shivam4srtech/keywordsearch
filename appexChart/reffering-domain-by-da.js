 (function() {
      const options = {
        chart: {
          type: 'bar',
          height: 300,
          toolbar: { show: false },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '60%',
            borderRadius: 0,
          }
        },
        dataLabels: { enabled: false },
        colors: ['#f5e368'], // golden yellow (as you specified earlier)
        series: [{
          name: 'Referring Domains',
          data: [50, 120, 180, 240, 160, 100,  20, 80, 60, 110] // example data
        }],
        xaxis: {
          categories: ['0–10', '11–20', '21–30', '31–40', '41–50', '51-60', '61-70', '71-80', '81-90', '91+'],
          title: {
            text: 'Domain Authority Ranges',
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
        tooltip: {
          y: {
            formatter: val => val + " domains"
          }
        }
      };

      const chart = new ApexCharts(document.querySelector("#referringDomainsDA"), options);
      chart.render();
    })();