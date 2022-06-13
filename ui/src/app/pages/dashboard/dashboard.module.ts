import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { CenteredContentModule } from '@templates/centered-content/centered-content.module';
import { MainNavModule } from '@templates/main-nav/main-nav.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatExpansionModule,
    CenteredContentModule,
    MainNavModule,
    MatIconModule
  ]
})
export class DashboardModule { }
