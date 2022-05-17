import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectComponent } from './pages/project/project.component';
import { NewComponent } from './pages/project/new/new.component';
import { EditComponent } from './pages/project/edit/edit.component';


const routes: Routes = [
  { path: "", component: ProjectComponent },
  { path: "projects", component: ProjectComponent },
  { path: "projects/new", component: NewComponent },
  { path: "projects/:id/edit", component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
