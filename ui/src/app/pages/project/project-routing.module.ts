import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from '@pages/project/index/index.component';
import { NewComponent } from '@pages/project/new/new.component';
import { ProjectComponent } from './project.component';

const routes: Routes = [
  { path: '', component: ProjectComponent, children: [
    { path: '', component: IndexComponent },
    { path: 'new', component: NewComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
