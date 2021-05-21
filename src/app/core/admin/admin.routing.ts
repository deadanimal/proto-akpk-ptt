import { Routes } from '@angular/router';
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

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'data',
                component: ManagementDataComponent
            },
            {
                path: 'management',
                children: [
                    
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    },
                    {
                        path: 'roles',
                        component: ManagementUserRoleComponent
                    }
                ]
            },
            {
                path: 'risk',
                component: ManagementRiskComponent
            },
            {
                path: 'monitor',
                component: MonitorProjectComponent
            },
            {
                path: 'schedule',
                component: SchedulingTaskComponent
            },
            {
                path: 'resource',
                component: ManagementResourceComponent
            },
            {
                path: 'docCtrl',
                component: ManagementDocCtrlComponent
            },
            {
                path: 'audit-trails',
                component: ManagementAuditComponent
            }/* ,
            {
                path: 'report',
                component: ReportComponent
            }*/
        ]
    }
]