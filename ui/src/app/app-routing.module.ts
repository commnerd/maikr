import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: "projects",
    loadChildren: () => import('@pages/project/project.module').then(m => m.ProjectModule)
  },
  {
    path: "schedule",
    loadChildren: () => import('@pages/schedule/schedule.module').then(m => m.ScheduleModule)
  },
  {
    path: "mvp",
    loadChildren: () => import('@pages/mvp/mvp.module').then(m => m.MvpModule)
  },
  {
    path: "dashboard",
    loadChildren: () => import('@pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: "lists",
    loadChildren: () => import('@pages/list/list.module').then(m => m.ListModule)
  },
  {
    path: "logs",
    loadChildren: () => import('@pages/log/log.module').then(m => m.LogModule)
  },
  {
    path: "settings",
    loadChildren: () => import('@pages/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: "tasks",
    loadChildren: () => import('@pages/tasks/tasks.module').then(m => m.TasksModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
