var options = {
  chart: {
    type: 'bar',
    height: 400,
    stacked: true,
    toolbar: { show: false },
  },
  colors: ['#77E4C8', '#FFD75E', '#FFA366', '#FF6B6B'],
  series: [
    {
      name: '1 - 3',
      data: [20, 25, 15, 20, 18, 22, 25, 28, 30, 35, 40, 42]
    },
    {
      name: '4 - 10',
      data: [20, 35, 30, 28, 32, 40, 45, 48, 52, 55, 60, 65]
    },
    {
      name: '11 - 50',
      data: [50, 60, 55, 65, 70, 72, 78, 85, 90, 95, 100, 110]
    },
    {
      name: '51 - 100',
      data: [40, 42, 45, 50, 55, 60, 62, 65, 70, 75, 80, 85]
    }
  ],
  xaxis: {
    categories: [
      'Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025',
      'Apr 2025', 'May 2025', 'Jun 2025', 'Jul 2025',
      'Aug 2025', 'Sept 2025', 'Oct 2025'
    ],
    labels: {
      style: { fontSize: '13px' }
    }
  },
  yaxis: {
    title: {
      text: 'Keywords',
      style: { fontWeight: 'bold' }
    }
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#fff'],
      fontWeight: 'bold'
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 4
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    markers: { radius: 12 },
  },
  grid: {
    borderColor: '#eee',
    strokeDashArray: 3
  }
};

var chart = new ApexCharts(document.querySelector("#keywordsRanking"), options);
chart.render();