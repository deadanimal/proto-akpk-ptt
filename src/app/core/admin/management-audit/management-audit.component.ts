import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
am4core.useTheme(am4themes_animated);

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-management-audit',
  templateUrl: './management-audit.component.html',
  styleUrls: ['./management-audit.component.scss']
})
export class ManagementAuditComponent implements OnInit, OnDestroy {

  private chart0;
  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any = [
    {
      userName: "Ali",
      userid: "F23441",
      datetime: "2/1/2021",
      action: "4",
      desc: "delete etc",
      module: "3"
    },{
      userName: "Ali",
      userid: "F23441",
      datetime: "2/1/2021",
      action: "1",
      desc: "post etc",
      module: "1"
    },{
      userName: "Abu",
      userid: "F24527",
      datetime: "11/2/2021",
      action: "2",
      desc: "get etc",
      module: "1"
    },{
      userName: "Abu",
      userid: "F24527",
      datetime: "11/2/2021",
      action: "3",
      desc: "update etc",
      module: "1"
    },{
      userName: "Anis",
      userid: "F56345",
      datetime: "20/3/2021",
      action: "4",
      desc: "delete etc",
      module: "1"
    },{
      userName: "Anis",
      userid: "F56345",
      datetime: "20/3/2021",
      action: "2",
      desc: "get etc",
      module: "1"
    },{
      userName: "Alia",
      userid: "F63717",
      datetime: "29/3/2021",
      action: "1",
      desc: "post etc",
      module: "1"
    },{
      userName: "Alia",
      userid: "F63717",
      datetime: "29/3/2021",
      action: "1",
      desc: "post etc",
      module: "3"
    },{
      userName: "Abu",
      userid: "F24527",
      datetime: "9/4/2021",
      action: "2",
      desc: "get etc",
      module: "1"
    },{
      userName: "Aiman",
      userid: "F56437",
      datetime: "9/4/2021",
      action: "3",
      desc: "update etc",
      module: "4"
    },{
      userName: "Aiman",
      userid: "F56437",
      datetime: "9/4/2021",
      action: "1",
      desc: "post etc",
      module: "1"
    },{
      userName: "Aiman",
      userid: "F56437",
      datetime: "9/4/2021",
      action: "4",
      desc: "delete etc",
      module: "1"
    }
  ]
  SelectionType = SelectionType;

  constructor(
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
    this.getChartActionTypes()
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart0) {
        this.chart0.dispose()
      }
    })
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartActionTypes()
    })
  }

  getChartActionTypes() {
    let chart = am4core.create('chartActionTypes', am4charts.XYChart)
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

    var max : number = 100;
    var min : number = 20;

    function getRandNum() {
      return Math.floor(Math.random()*(max-min+1)+min)
    }

    chart.data = [
        {
            category: 'Post',
            first: getRandNum(),
            second: getRandNum(),
            third: getRandNum(),
            first1: getRandNum(),
            second1: getRandNum(),
            third1: getRandNum(),
            first2: getRandNum(),
            second2: getRandNum(),
            third2: getRandNum(),
            first3: getRandNum(),
            second3: getRandNum(),
            third3: getRandNum()
        },
        {
            category: 'Get',
            first: getRandNum(),
            second: getRandNum(),
            third: getRandNum(),
            first1: getRandNum(),
            second1: getRandNum(),
            third1: getRandNum(),
            first2: getRandNum(),
            second2: getRandNum(),
            third2: getRandNum(),
            first3: getRandNum(),
            second3: getRandNum(),
            third3: getRandNum()
        },
        {
            category: 'Update',
            first: getRandNum(),
            second: getRandNum(),
            third: getRandNum(),
            first1: getRandNum(),
            second1: getRandNum(),
            third1: getRandNum(),
            first2: getRandNum(),
            second2: getRandNum(),
            third2: getRandNum(),
            first3: getRandNum(),
            second3: getRandNum(),
            third3: getRandNum()
        },
        {
            category: 'Delete',
            first: getRandNum(),
            second: getRandNum(),
            third: getRandNum(),
            first1: getRandNum(),
            second1: getRandNum(),
            third1: getRandNum(),
            first2: getRandNum(),
            second2: getRandNum(),
            third2: getRandNum(),
            first3: getRandNum(),
            second3: getRandNum(),
            third3: getRandNum()
        }
    ]


    createSeries('first', 'Jan');
    createSeries('second', 'Feb');
    createSeries('third', 'March');
    createSeries('first1', 'April');
    createSeries('second1', 'May');
    createSeries('third1', 'June');
    createSeries('first2', 'July');
    createSeries('second2', 'August');
    createSeries('third2', 'September');
    createSeries('first3', 'Oct');
    createSeries('second3', 'Nov');
    createSeries('third3', 'Dec');

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

    this.chart0 = chart;
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
        if (d[key].toLowerCase().indexOf(val) != -1) {
          return d;
        }
      }
      return false;
    });
  }
}
