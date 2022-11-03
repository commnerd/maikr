import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CenteredContentComponent } from './centered-content.component';


@NgModule({
  declarations: [
    CenteredContentComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    CenteredContentComponent
  ]
})
export class CenteredContentModule { }
