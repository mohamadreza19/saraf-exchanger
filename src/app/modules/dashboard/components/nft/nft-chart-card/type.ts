export interface chartOptions {
  series:Data [

  ],
  chart: {
    fontFamily: 'inherit',
    type: 'area',
    height: 150,
    toolbar: {
      show: boolean,
    },
    sparkline: {
      enabled: boolean,
    },
  },
  dataLabels: {
    enabled: boolean,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.2,
      stops: [15, 120, 100],
    },
  },
  stroke: {
    curve: 'smooth',
    show: true,
    width: 3,
    colors: [baseColor], // line color
  },
  xaxis: {
    categories: categories,
    labels: {
      show: false,
    },
    crosshairs: {
      position: 'front',
      stroke: {
        color: baseColor,
        width: 1,
        dashArray: 4,
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  tooltip: {
    theme: 'light',
    y: {
      formatter: function (val) {
        return val + '$';
      },
    },
  },
  colors: [baseColor], //line colors
};

export interface Data {
  name: string,
  data: number[],
}

export interface Style{

}

