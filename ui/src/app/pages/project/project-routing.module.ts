import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectComponent } from '@pages/project/project.component';
import { NewComponent } from '@pages/project/new/new.component';


const routes: Routes = [
  { path: "", component: ProjectComponent },
  { path: "new", component: NewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
