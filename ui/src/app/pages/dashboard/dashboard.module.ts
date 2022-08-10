import { forwardRef, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { Phase as ProjectPhase, Type as ProjectType } from '@maikr/lib/models/project';

import { CenteredContentModule } from '@templates/centered-content/centered-content.module';
import { TextEditListModule } from '@templates/text-edit-list/text-edit-list.module';
import { MainNavModule } from '@templates/main-nav/main-nav.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MatExpansionModule,
    CenteredContentModule,
    TextEditListModule,
    MatSelectModule,
    MainNavModule,
    MatIconModule
  ],
})
export class DashboardModule { }
