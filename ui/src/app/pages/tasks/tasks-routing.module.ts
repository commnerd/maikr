import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './tasks.component';
import { NewComponent } from '@pages/tasks/new/new.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'new', component: NewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }