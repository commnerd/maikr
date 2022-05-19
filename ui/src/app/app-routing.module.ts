import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'prefix' },
  {
    path: "projects",
    loadChildren: () => import('@pages/project/project.module').then(m => m.ProjectModule)
  },
  {
    path: "project-definition",
    loadChildren: () => import('@pages/project-definition/project-definition.module').then(m => m.ProjectDefinitionModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
