import { Component, OnInit, NgZone, OnDestroy, TemplateRef, ViewChild  } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { TabsetComponent, TabsetConfig } from 'ngx-bootstrap/tabs';
import { tileLayer, latLng, marker, icon } from "leaflet";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

export function getTabsetConfig(): TabsetConfig {
  return Object.assign(new TabsetConfig(), { type: 'pills', isKeysAllowed: true });
}

@Component({
  selector: 'app-monitor-project',
  templateUrl: './monitor-project.component.html',
  styleUrls: ['./monitor-project.component.scss'],
  providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }]
})
export class MonitorProjectComponent implements OnInit, OnDestroy {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;

  selectTab(tabId: number) {
    if (this.staticTabs.tabs)
		  this.staticTabs.tabs[tabId].active = true;
  }

  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-lg modal-dialog-centered"
  };

  private chart0;
  private chart1;
  private chart2;

  options;
  layers;
  
  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any = [
    {
      projName: "Project A",
      projLoc: "KL",
      teamAsgn: "Eagle1",
      date: "3/4/2020",
      projProg: "15%"
    },
    {
      projName: "Project B",
      projLoc: "KL",
      teamAsgn: "Eagle3",
      date: "1/4/2020",
      projProg: "35%"
    },
    {
      projName: "Project C",
      projLoc: "Selangor",
      teamAsgn: "Turtle7",
      date: "3/4/2020",
      projProg: "45%"
    },
    {
      projName: "Project D",
      projLoc: "KL",
      teamAsgn: "Eagle9",
      date: "2/4/2020",
      projProg: "15%"
    },
    {
      projName: "Project E",
      projLoc: "Perlis",
      teamAsgn: "Phoenix8",
      date: "3/4/2020",
      projProg: "25%"
    },
    {
      projName: "Project F",
      projLoc: "Selangor",
      teamAsgn: "Turtle2",
      date: "3/4/2020",
      projProg: "45%"
    },
    {
      projName: "Project G",
      projLoc: "Melaka",
      teamAsgn: "Lion4",
      date: "1/4/2020",
      projProg: "35%"
    },
    {
      projName: "Project H",
      projLoc: "Johor",
      teamAsgn: "Tiger7",
      date: "3/4/2020",
      projProg: "15%"
    },
    {
      projName: "Project I",
      projLoc: "Johor",
      teamAsgn: "Tiger3",
      date: "2/4/2020",
      projProg: "25%"
    },
    {
      projName: "Project J",
      projLoc: "KL",
      teamAsgn: "Eagle3",
      date: "1/4/2020",
      projProg: "35%"
    }
  ]
  SelectionType = SelectionType;

  constructor(
    private modalService: BsModalService,
    private zone: NgZone
  ) {
    this.tableTemp = this.tableRows.map((prop, key) => {
      return {
        ...prop,
        id: key
      };

    });
  }

  ngOnInit() {
    this.getCharts()
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart0) {
        this.chart0.dispose()
      }
      if (this.chart1) {
        this.chart1.dispose()
      }
      if (this.chart2) {
        this.chart2.dispose()
      }
    })
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartTotProfit()
      this.getChartGantt()
    })
  }

  getChartTotProfit() {
    let chart = am4core.create("chartTotProfitMain", am4charts.XYChart);
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

    this.chart0 = chart;
  }

  getChartGantt() {
    let chart = am4core.create("chartGantt", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.paddingRight = 30;
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";

    let colorSet = new am4core.ColorSet();
    colorSet.saturation = 0.4;

    chart.data = [ {
      "category": "Module #1",
      "start": "2016-01-01",
      "end": "2016-01-14",
      "color": colorSet.getIndex(0).brighten(0),
      "task": "Gathering requirements"
    }, {
      "category": "Module #1",
      "start": "2016-01-16",
      "end": "2016-01-27",
      "color": colorSet.getIndex(0).brighten(0.4),
      "task": "Producing specifications"
    }, {
      "category": "Module #1",
      "start": "2016-02-05",
      "end": "2016-04-18",
      "color": colorSet.getIndex(0).brighten(0.8),
      "task": "Development"
    }, {
      "category": "Module #1",
      "start": "2016-04-18",
      "end": "2016-04-30",
      "color": colorSet.getIndex(0).brighten(1.2),
      "task": "Testing and QA"
    }, {
      "category": "Module #2",
      "start": "2016-01-08",
      "end": "2016-01-10",
      "color": colorSet.getIndex(2).brighten(0),
      "task": "Gathering requirements"
    }, {
      "category": "Module #2",
      "start": "2016-01-12",
      "end": "2016-01-15",
      "color": colorSet.getIndex(2).brighten(0.4),
      "task": "Producing specifications"
    }, {
      "category": "Module #2",
      "start": "2016-01-16",
      "end": "2016-02-05",
      "color": colorSet.getIndex(2).brighten(0.8),
      "task": "Development"
    }, {
      "category": "Module #2",
      "start": "2016-02-10",
      "end": "2016-02-18",
      "color": colorSet.getIndex(2).brighten(1.2),
      "task": "Testing and QA"
    }, {
      "category": "Module #3",
      "start": "2016-01-02",
      "end": "2016-01-08",
      "color": colorSet.getIndex(4).brighten(0),
      "task": "Gathering requirements"
    }, {
      "category": "Module #3",
      "start": "2016-01-08",
      "end": "2016-01-16",
      "color": colorSet.getIndex(4).brighten(0.4),
      "task": "Producing specifications"
    }, {
      "category": "Module #3",
      "start": "2016-01-19",
      "end": "2016-03-01",
      "color": colorSet.getIndex(4).brighten(0.8),
      "task": "Development"
    }, {
      "category": "Module #3",
      "start": "2016-03-12",
      "end": "2016-04-05",
      "color": colorSet.getIndex(4).brighten(1.2),
      "task": "Testing and QA"
    }, {
      "category": "Module #4",
      "start": "2016-01-01",
      "end": "2016-01-19",
      "color": colorSet.getIndex(6).brighten(0),
      "task": "Gathering requirements"
    }, {
      "category": "Module #4",
      "start": "2016-01-19",
      "end": "2016-02-03",
      "color": colorSet.getIndex(6).brighten(0.4),
      "task": "Producing specifications"
    }, {
      "category": "Module #4",
      "start": "2016-03-20",
      "end": "2016-04-25",
      "color": colorSet.getIndex(6).brighten(0.8),
      "task": "Development"
    }, {
      "category": "Module #4",
      "start": "2016-04-27",
      "end": "2016-05-15",
      "color": colorSet.getIndex(6).brighten(1.2),
      "task": "Testing and QA"
    }, {
      "category": "Module #5",
      "start": "2016-01-01",
      "end": "2016-01-12",
      "color": colorSet.getIndex(8).brighten(0),
      "task": "Gathering requirements"
    }, {
      "category": "Module #5",
      "start": "2016-01-12",
      "end": "2016-01-19",
      "color": colorSet.getIndex(8).brighten(0.4),
      "task": "Producing specifications"
    }, {
      "category": "Module #5",
      "start": "2016-01-19",
      "end": "2016-03-01",
      "color": colorSet.getIndex(8).brighten(0.8),
      "task": "Development"
    }, {
      "category": "Module #5",
      "start": "2016-03-08",
      "end": "2016-03-30",
      "color": colorSet.getIndex(8).brighten(1.2),
      "task": "Testing and QA"
    } ];

    chart.dateFormatter.dateFormat = "yyyy-MM-dd";
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.inversed = true;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 1, timeUnit: "day" };
    // dateAxis.max = new Date(2018, 0, 1, 24, 0, 0, 0).getTime();
    //dateAxis.strictMinMax = true;
    dateAxis.renderer.tooltipLocation = 0;

    let series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.columns.template.height = am4core.percent(70);
    series1.columns.template.tooltipText = "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

    series1.dataFields.openDateX = "start";
    series1.dataFields.dateX = "end";
    series1.dataFields.categoryY = "category";
    series1.columns.template.propertyFields.fill = "color"; // get color from data
    series1.columns.template.propertyFields.stroke = "color";
    series1.columns.template.strokeOpacity = 1;

    chart.scrollbarX = new am4core.Scrollbar();

    this.chart1 = chart;
  }

  getChartTimeline() {
    let chart = am4core.create("chartTimeSche", am4plugins_timeline.SerpentineChart);
    chart.curveContainer.padding(50, 20, 50, 20);
    chart.levelCount = 4;
    chart.yAxisRadius = am4core.percent(25);
    chart.yAxisInnerRadius = am4core.percent(-25);
    chart.maskBullets = false;

    let colorSet = new am4core.ColorSet();
    colorSet.saturation = 0.5;

    chart.data = [{
        "category": "Module #1",
        "start": "2019-01-10",
        "end": "2019-01-13",
        "color": colorSet.getIndex(0),
        "task": "Gathering requirements"
    }, {
        "category": "Module #1",
        "start": "2019-02-05",
        "end": "2019-04-18",
        "color": colorSet.getIndex(0),
        "task": "Development"
    }, {
        "category": "Module #2",
        "start": "2019-01-08",
        "end": "2019-01-10",
        "color": colorSet.getIndex(5),
        "task": "Gathering requirements"
    }, {
        "category": "Module #2",
        "start": "2019-01-12",
        "end": "2019-01-15",
        "color": colorSet.getIndex(5),
        "task": "Producing specifications"
    }, {
        "category": "Module #2",
        "start": "2019-01-16",
        "end": "2019-02-05",
        "color": colorSet.getIndex(5),
        "task": "Development"
    }, {
        "category": "Module #2",
        "start": "2019-02-10",
        "end": "2019-02-18",
        "color": colorSet.getIndex(5),
        "task": "Testing and QA"
    }, {
        "category": ""
    }, {
        "category": "Module #3",
        "start": "2019-01-01",
        "end": "2019-01-19",
        "color": colorSet.getIndex(9),
        "task": "Gathering requirements"    
    }, {
        "category": "Module #3",
        "start": "2019-02-01",
        "end": "2019-02-10",
        "color": colorSet.getIndex(9),
        "task": "Producing specifications"
    }, {
        "category": "Module #3",
        "start": "2019-03-10",
        "end": "2019-04-15",
        "color": colorSet.getIndex(9),
        "task": "Development"
    }, {
        "category": "Module #3",
        "start": "2019-04-20",
        "end": "2019-04-30",
        "color": colorSet.getIndex(9),
        "task": "Testing and QA",
        "disabled2":false,
        "image2":"/wp-content/uploads/assets/timeline/rachel.jpg",
        "location":0
    }, {
        "category": "Module #4",
        "start": "2019-01-15",
        "end": "2019-02-12",
        "color": colorSet.getIndex(15),
        "task": "Gathering requirements",
        "disabled1":false,
        "image1":"/wp-content/uploads/assets/timeline/monica.jpg"
    }, {
        "category": "Module #4",
        "start": "2019-02-25",
        "end": "2019-03-10",
        "color": colorSet.getIndex(15),
        "task": "Development"
    }, {
        "category": "Module #4",
        "start": "2019-03-23",
        "end": "2019-04-29",
        "color": colorSet.getIndex(15),
        "task": "Testing and QA"
    }];

    chart.dateFormatter.dateFormat = "yyyy-MM-dd";
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
    chart.fontSize = 11;

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis() as any);
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.paddingRight = 25;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.innerRadius = -60;
    categoryAxis.renderer.radius = 60;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis() as any);
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 1, timeUnit: "day" };
    dateAxis.renderer.tooltipLocation = 0;
    dateAxis.startLocation = -0.5;
    dateAxis.renderer.line.strokeDasharray = "1,4";
    dateAxis.renderer.line.strokeOpacity = 0.6;
    dateAxis.tooltip.background.fillOpacity = 0.2;
    dateAxis.tooltip.background.cornerRadius = 5;
    dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    dateAxis.tooltip.label.paddingTop = 7;

    let labelTemplate = dateAxis.renderer.labels.template;
    labelTemplate.verticalCenter = "middle";
    labelTemplate.fillOpacity = 0.7;
    labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor("background");
    labelTemplate.background.fillOpacity = 1;
    labelTemplate.padding(7, 7, 7, 7);

    let series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
    series.columns.template.height = am4core.percent(20);
    series.columns.template.tooltipText = "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

    series.dataFields.openDateX = "start";
    series.dataFields.dateX = "end";
    series.dataFields.categoryY = "category";
    series.columns.template.propertyFields.fill = "color"; // get color from data
    series.columns.template.propertyFields.stroke = "color";
    series.columns.template.strokeOpacity = 0;

    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 3;
    bullet.circle.strokeOpacity = 0;
    bullet.propertyFields.fill = "color";
    bullet.locationX = 0;


    let bullet2 = series.bullets.push(new am4charts.CircleBullet());
    bullet2.circle.radius = 3;
    bullet2.circle.strokeOpacity = 0;
    bullet2.propertyFields.fill = "color";
    bullet2.locationX = 1;


    let imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet1.disabled = true;
    imageBullet1.propertyFields.disabled = "disabled1";
    imageBullet1.locationX = 1;
    imageBullet1.circle.radius = 20;
    imageBullet1.propertyFields.stroke = "color";
    imageBullet1.background.propertyFields.fill = "color";
    imageBullet1.image = new am4core.Image();
    imageBullet1.image.propertyFields.href = "image1";

    let imageBullet2 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet2.disabled = true;
    imageBullet2.propertyFields.disabled = "disabled2";
    imageBullet2.locationX = 0;
    imageBullet2.circle.radius = 20;
    imageBullet2.propertyFields.stroke = "color";
    imageBullet2.background.propertyFields.fill = "color";
    imageBullet2.image = new am4core.Image();
    imageBullet2.image.propertyFields.href = "image2";


    let eventSeries = chart.series.push(new am4plugins_timeline.CurveLineSeries());
    eventSeries.dataFields.dateX = "eventDate";
    eventSeries.dataFields.categoryY = "category";
    eventSeries.data = [
        { category: "", eventDate: "2019-01-15", letter: "A", description: "Something happened here" },
        { category: "", eventDate: "2019-01-23", letter: "B", description: "Something happened here" },
        { category: "", eventDate: "2019-02-10", letter: "C", description: "Something happened here" },
        { category: "", eventDate: "2019-02-29", letter: "D", description: "Something happened here" },
        { category: "", eventDate: "2019-03-06", letter: "E", description: "Something happened here" },
        { category: "", eventDate: "2019-03-12", letter: "F", description: "Something happened here" },
        { category: "", eventDate: "2019-03-22", letter: "G", description: "Something happened here" }];
    eventSeries.strokeOpacity = 0;

    let flagBullet = eventSeries.bullets.push(new am4plugins_bullets.FlagBullet())
    flagBullet.label.propertyFields.text = "letter";
    flagBullet.locationX = 0;
    flagBullet.tooltipText = "{description}";

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.align = "center"
    chart.scrollbarX.width = am4core.percent(85);

    let cursor = new am4plugins_timeline.CurveCursor();
    chart.cursor = cursor;
    cursor.xAxis = dateAxis;
    cursor.yAxis = categoryAxis;
    cursor.lineY.disabled = true;
    cursor.lineX.strokeDasharray = "1,4";
    cursor.lineX.strokeOpacity = 1;

    dateAxis.renderer.tooltipLocation2 = 0;
    categoryAxis.cursorTooltipEnabled = false;

    this.chart2 = chart;
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value;
    this.tableTemp = this.tableRows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  openModal0(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
    this.getChartTimeline();

    this.options = {
      layers: [
        tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 18,
          attribution: "...",
        }),
      ],
      zoom: 8,
      center: latLng(1.4927, 103.7414),
    };
  
    this.layers = [
      marker([1.4927, 1103.7414], {
        icon: icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: "../assets/img/default/pinpoint-blue.png",
        }),
      }),
      /* marker([3.140853, 101.693207], {
         icon: icon({
           iconSize: [25, 41],
           iconAnchor: [13, 41],
           iconUrl: "../assets/img/default/pinpoint-blue.png",
         }),
       }),
       marker([2.691369, 101.750527], {
         icon: icon({
           iconSize: [25, 41],
           iconAnchor: [13, 41],
           iconUrl: "../assets/img/default/pinpoint-yellow.png",
         }),
       }),*/
    ]; 
    
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
    //this.registerForm.reset()
  }

}
