import { Component, OnInit } from '@angular/core';

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-management-doc-ctrl',
  templateUrl: './management-doc-ctrl.component.html',
  styleUrls: ['./management-doc-ctrl.component.scss']
})
export class ManagementDocCtrlComponent implements OnInit {

  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any = [
    {
      docName: "R&D Doc A",
      docType: ".pdf",
      department: "Research and Development",
      views: "353",
      lastModi: "12/2/2020"
    },
    {
      docName: "Marketing Doc A",
      docType: ".xsl",
      department: "Marketing",
      views: "114",
      lastModi: "12/2/2020"
    },
    {
      docName: "HR Doc A",
      docType: ".csv",
      department: "Human Resource Management",
      views: "223",
      lastModi: "12/2/2020"
    },
    {
      docName: "R&D Doc B",
      docType: ".csv",
      department: "Research and Development",
      views: "314",
      lastModi: "12/2/2020"
    },
    {
      docName: "Marketing Doc B",
      docType: ".xsl",
      department: "Marketing",
      views: "87",
      lastModi: "12/2/2020"
    },
    {
      docName: "Marketing Doc C",
      docType: ".pdf",
      department: "Marketing",
      views: "92",
      lastModi: "12/2/2020"
    },
    {
      docName: "AccFin Doc A",
      docType: ".csv",
      department: "Accounting and Finance",
      views: "561",
      lastModi: "12/2/2020"
    },
    {
      docName: "R&D Doc C",
      docType: ".pdf",
      department: "Research and Development",
      views: "293",
      lastModi: "12/2/2020"
    },
    {
      docName: "R&D Doc D",
      docType: ".xsl",
      department: "Research and Development",
      views: "319",
      lastModi: "12/2/2020"
    },
    {
      docName: "HR Doc B",
      docType: ".csv",
      department: "Human Resource Management",
      views: "133",
      lastModi: "12/2/2020"
    }
  ]
  SelectionType = SelectionType;

  constructor() {
    this.tableTemp = this.tableRows.map((prop, key) => {
      return {
        ...prop,
        id: key
      };

    });
  }

  ngOnInit() {
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
        if (/*isNaN(d[key]) && */d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

}
