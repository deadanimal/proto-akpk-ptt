export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/admin/data',
    title: 'Data Management',
    type: 'link',
    icontype: 'fas fa-info-circle text-info'
  },
  {
    path: '/admin/management',
    title: 'User Management',
    type: 'sub',
    icontype: 'fas fa-users text-pink',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'user', title: 'User', type: 'link' },
      { path: 'roles', title: 'Roles', type: 'link' }
    ]
  },
  {
    path: '/admin/risk',
    title: 'Risk Management',
    type: 'link',
    icontype: 'fas fa-exclamation-triangle text-default'
  },
  {
    path: '/admin/monitor',
    title: 'Project Monitoring',
    type: 'link',
    icontype: 'fas fa-desktop text-teal'
  },
  {
    path: '/admin/schedule',
    title: 'Task Scheduling',
    type: 'link',
    icontype: 'fas fa-calendar text-green'
  },
  {
    path: '/admin/resource',
    title: 'Resource Management',
    type: 'link',
    icontype: 'fas fa-thumbtack text-orange'
  },
  {
    path: '/admin/docCtrl',
    title: 'Document Control Management',
    type: 'link',
    icontype: 'far fa-file-alt text-blue'
  },
  {
    path: '/admin/audit-trails',
    title: 'Audit Trails',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  },
  /*
  {
    path: '/admin/report',
    title: 'Reporting',
    type: 'link',
    icontype: 'fas fa-chart-bar text-red'
  },
  
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/user/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  }/*,
  {
    path: '/user/applications',
    title: 'Applications',
    type: 'link',
    icontype: 'fas fa-file-invoice text-pink'
  },
  {
    path: '/user/houses',
    title: 'Houses',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/user/management',
    title: 'Management',
    type: 'link',
    icontype: 'fas fa-tasks text-red'
  },
  {
    path: '/user/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-green'
  },
  {
    path: '/user/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/user/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  },
  {
    path: '/user/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/user/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];