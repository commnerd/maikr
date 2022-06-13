import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatExpansionModule
  ]
})
export class DashboardModule { }
