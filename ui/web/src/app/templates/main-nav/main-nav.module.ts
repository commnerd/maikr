import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav.component';

import { MatToolbarModule } from '@angular/material/toolbar'


@NgModule({
  declarations: [
    MainNavComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    MainNavComponent
  ]
})
export class MainNavModule { }
