import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    loadChildren: () => import('@pages/list/list.module').then(m => m.ListModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
