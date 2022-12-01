import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    loadChildren: () => import('@pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: "dashboard",
    component: PagesComponent,
    loadChildren: () => import('@pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: "list",
    component: PagesComponent,
    loadChildren: () => import('@pages/list/list.module').then(m => m.ListModule)
  },
  {
    path: "lists",
    component: PagesComponent,
    loadChildren: () => import('@pages/lists/lists.module').then(m => m.ListsModule)
  },
  {
    path: "logs",
    component: PagesComponent,
    loadChildren: () => import('@pages/logs/logs.module').then(m => m.LogsModule)
  },
  {
    path: "schedule",
    component: PagesComponent,
    loadChildren: () => import('@pages/schedule/schedule.module').then(m => m.ScheduleModule)
  },
  {
    path: "settings",
    component: PagesComponent,
    loadChildren: () => import('@pages/settings/settings.module').then(m => m.SettingsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
