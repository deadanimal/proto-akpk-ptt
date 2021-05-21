import { Component, OnInit, NgZone, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-management-user-role',
  templateUrl: './management-user-role.component.html',
  styleUrls: ['./management-user-role.component.scss']
})
export class ManagementUserRoleComponent implements OnInit {

  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any = [
    {
      num: "1",
      userName: "Admin",
      name: "Admin System",
      userType: "1",
      crud: "1111"
    },
    {
      num: "2",
      userName: "User",
      name: "User System",
      userType: "2",
      crud: "0110"
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
  }

  ngOnDestroy() {
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

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
    //this.registerForm.reset()
  }

}
