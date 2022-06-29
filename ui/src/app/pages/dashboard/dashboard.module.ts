import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { Phase as ProjectPhase, Type as ProjectType } from '@maikr/lib/models/project';

import { CenteredContentModule } from '@templates/centered-content/centered-content.module';
import { TextEditModule } from '@templates/text-edit/text-edit.module';
import { MainNavModule } from '@templates/main-nav/main-nav.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MatExpansionModule,
    CenteredContentModule,
    TextEditModule,
    MatSelectModule,
    MainNavModule,
    MatIconModule
  ],
})
export class DashboardModule { }
