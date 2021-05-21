import { Component, OnInit, NgZone, OnDestroy } from "@angular/core";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);

import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {


  // Chart
  private chart0: any
  private chart1: any
  private chart2: any
  private chart3: any


  constructor(
    private zone: NgZone
  ) {}

  ngOnInit() {
    this.getCharts()
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(
      () => {
        if (this.chart0) {
          console.log('Chart disposed')
          this.chart0.dispose()
        }
        if (this.chart1) {
          console.log('Chart disposed')
          this.chart1.dispose()
        }
        if (this.chart2) {
          console.log('Chart disposed')
          this.chart2.dispose()
        }
        if (this.chart3) {
          console.log('Chart disposed')
          this.chart3.dispose()
        }
      }
    )
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartTeamStat()
      this.getChartTeamLoc()
      this.getChartTotProfit()
      this.getChartProfvsRev()
    })
  }

  getChartTeamStat() {
    let chart = am4core.create("chartTeamStat", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        country: "On Task",
        value: 401
      },
      {
        country: "On Backup",
        value: 300
      },
      {
        country: "On Idle",
        value: 200
      },
      {
        country: "On Leave",
        value: 165
      }
    ];
    chart.radius = am4core.percent(60);
    chart.innerRadius = am4core.percent(30);
    chart.startAngle = 135;
    chart.endAngle = 405;  

    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "country";

    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    series.alignLabels = false;

    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;

    this.chart0 = chart;
  }

  getChartTeamLoc() {
    let chart = am4core.create("chartTeamLoc", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        country: "KL",
        value: 260
      },
      {
        country: "Selangor",
        value: 230
      },
      {
        country: "Johor",
        value: 200
      },
      {
        country: "Melaka",
        value: 165
      },
      {
        country: "Kelantan",
        value: 139
      },
      {
        country: "Perak",
        value: 128
      }
    ];

    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.radiusValue = "value";
    series.dataFields.category = "country";
    series.slices.template.cornerRadius = 6;
    series.colors.step = 3;

    series.hiddenState.properties.endAngle = -90;

    //chart.legend = new am4charts.Legend();

    this.chart1 = chart;
  }

  getChartTotProfit() {
    let chart = am4core.create("chartTotProfit", am4charts.XYChart);
    chart.paddingRight = 20;

    // Add data
    chart.data = [{
      "year": "1950",
      "value": -0.307
    }, {
      "year": "1951",
      "value": -0.168
    }, {
      "year": "1952",
      "value": -0.073
    }, {
      "year": "1953",
      "value": -0.027
    }, {
      "year": "1954",
      "value": -0.251
    }, {
      "year": "1955",
      "value": -0.281
    }, {
      "year": "1956",
      "value": -0.348
    }, {
      "year": "1957",
      "value": -0.074
    }, {
      "year": "1958",
      "value": -0.011
    }, {
      "year": "1959",
      "value": -0.074
    }, {
      "year": "1960",
      "value": -0.124
    }, {
      "year": "1961",
      "value": -0.024
    }, {
      "year": "1962",
      "value": -0.022
    }, {
      "year": "1963",
      "value": 0
    }, {
      "year": "1964",
      "value": -0.296
    }, {
      "year": "1965",
      "value": -0.217
    }, {
      "year": "1966",
      "value": -0.147
    }, {
      "year": "1967",
      "value": -0.15
    }, {
      "year": "1968",
      "value": -0.16
    }, {
      "year": "1969",
      "value": -0.011
    }, {
      "year": "1970",
      "value": -0.068
    }, {
      "year": "1971",
      "value": -0.19
    }, {
      "year": "1972",
      "value": -0.056
    }, {
      "year": "1973",
      "value": 0.077
    }, {
      "year": "1974",
      "value": -0.213
    }, {
      "year": "1975",
      "value": -0.17
    }, {
      "year": "1976",
      "value": -0.254
    }, {
      "year": "1977",
      "value": 0.019
    }, {
      "year": "1978",
      "value": -0.063
    }, {
      "year": "1979",
      "value": 0.05
    }, {
      "year": "1980",
      "value": 0.077
    }, {
      "year": "1981",
      "value": 0.12
    }, {
      "year": "1982",
      "value": 0.011
    }, {
      "year": "1983",
      "value": 0.177
    }, {
      "year": "1984",
      "value": -0.021
    }, {
      "year": "1985",
      "value": -0.037
    }, {
      "year": "1986",
      "value": 0.03
    }, {
      "year": "1987",
      "value": 0.179
    }, {
      "year": "1988",
      "value": 0.18
    }, {
      "year": "1989",
      "value": 0.104
    }, {
      "year": "1990",
      "value": 0.255
    }, {
      "year": "1991",
      "value": 0.21
    }, {
      "year": "1992",
      "value": 0.065
    }, {
      "year": "1993",
      "value": 0.11
    }, {
      "year": "1994",
      "value": 0.172
    }, {
      "year": "1995",
      "value": 0.269
    }, {
      "year": "1996",
      "value": 0.141
    }, {
      "year": "1997",
      "value": 0.353
    }, {
      "year": "1998",
      "value": 0.548
    }, {
      "year": "1999",
      "value": 0.298
    }, {
      "year": "2000",
      "value": 0.267
    }, {
      "year": "2001",
      "value": 0.411
    }, {
      "year": "2002",
      "value": 0.462
    }, {
      "year": "2003",
      "value": 0.47
    }, {
      "year": "2004",
      "value": 0.445
    }, {
      "year": "2005",
      "value": 0.47
    }];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.minGridDistance = 50;
    categoryAxis.renderer.grid.template.location = 0.5;
    categoryAxis.startLocation = 0.5;
    categoryAxis.endLocation = 0.5;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.baseValue = 0;

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "year";
    series.strokeWidth = 2;
    series.tensionX = 0.77;

    // bullet is added because we add tooltip to a bullet for it to change color
    let bullet = series.bullets.push(new am4charts.Bullet());
    bullet.tooltipText = "{valueY}";

    bullet.adapter.add("fill", function(fill, target){
        if(target.dataItem.values.valueY.value < 0){
            return am4core.color("#FF0000");
        }
        return fill;
    })
    
    let range = valueAxis.createSeriesRange(series);
    range.value = 0;
    range.endValue = -1000;
    range.contents.stroke = am4core.color("#FF0000");
    range.contents.fill = range.contents.stroke;

    // Add scrollbar
    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    chart.cursor = new am4charts.XYCursor();

    this.chart2 = chart;
  }

  getChartProfvsRev() {
    let chart = am4core.create('chartProfvsRev', am4charts.XYChart)
    chart.colors.step = 2;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20
    chart.legend.labels.template.maxWidth = 95

    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;

    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;

    function createSeries(value, name) {
        let series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'category'
        series.name = name

        series.events.on("hidden", arrangeColumns);
        series.events.on("shown", arrangeColumns);

        let bullet = series.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        bullet.dy = 30;
        bullet.label.text = '{valueY}'
        bullet.label.fill = am4core.color('#ffffff')

        return series;
    }

    chart.data = [
        {
            category: '2018',
            first: 40,
            second: 55
        },
        {
            category: '2019',
            first: 30,
            second: 78
        },
        {
            category: '2020',
            first: 27,
            second: 40
        },
        {
            category: '2021',
            first: 50,
            second: 33
        }
    ]


    createSeries('first', 'The Profit');
    createSeries('second', 'The Revenue');

    function arrangeColumns() {

        let series = chart.series.getIndex(0);

        let w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            let delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                let middle = chart.series.length / 2;

                let newIndex = 0;
                chart.series.each(function(series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                })
                let visibleCount = newIndex;
                let newMiddle = visibleCount / 2;

                chart.series.each(function(series) {
                    let trueIndex = chart.series.indexOf(series);
                    let newIndex = series.dummyData;

                    let dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }

    this.chart3 = chart;
  }

}
