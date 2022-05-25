import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MvpComponent } from './mvp.component';

const routes: Routes = [
  { path: '', component: MvpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MVPRoutingModule { }
