import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { ManagementDataComponent } from './management-data/management-data.component';
import { ManagementUserRoleComponent } from './management-user-role/management-user-role.component';
import { ManagementRiskComponent } from './management-risk/management-risk.component';
import { ManagementResourceComponent } from './management-resource/management-resource.component';
import { ManagementDocCtrlComponent } from './management-doc-ctrl/management-doc-ctrl.component';
import { MonitorProjectComponent } from './monitor-project/monitor-project.component';
import { SchedulingTaskComponent } from './scheduling-task/scheduling-task.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    ManagementDataComponent,
    ManagementUserRoleComponent,
    ManagementRiskComponent,
    ManagementResourceComponent,
    ManagementDocCtrlComponent,
    MonitorProjectComponent,
    SchedulingTaskComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes),
    LeafletModule
  ]
})
export class AdminModule { }
