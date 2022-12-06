import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewComponent } from '@pages/projects/new/new.component';
import { DefinitionComponent } from './definition/definition.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'new', component: NewComponent },
  { path: ':id/definition', component: DefinitionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
