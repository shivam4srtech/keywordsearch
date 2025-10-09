(function() {
      const value = 83; // <-- SEO Difficulty Value (0–100)

      const options = {
        chart: {
          height: 350,
          type: 'radialBar',
          toolbar: { show: false },
        },
        series: [value],
        colors: ['#ff6b6b'], // red tone
        plotOptions: {
          radialBar: {
            startAngle: -100,
            endAngle: 100,
            track: {
              background: '#f2f2f2',
              strokeWidth: '100%',
            },
            dataLabels: {
              name: {
                show: true,
                offsetY: 80,
                color: '#666',
                fontSize: '14px',
                formatter: () => 'SEO DIFFICULTY',
              },
              value: {
                fontSize: '36px',
                fontWeight: 700,
                color: '#000',
                offsetY: 10,
                formatter: val => parseInt(val),
              },
            },
          },
        },
        fill: {
          type: 'solid',
        },
        stroke: {
          lineCap: 'round'
        },
        labels: ['High'],
      };

      const chart = new ApexCharts(document.querySelector("#seoGauge"), options);
      chart.render();
    })();