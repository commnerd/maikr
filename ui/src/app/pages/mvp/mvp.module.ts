import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvpComponent } from './mvp.component';
import { MVPRoutingModule } from './mvp-routing.module';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    MvpComponent
  ],
  imports: [
    CommonModule,
    MVPRoutingModule,
    DragDropModule
  ]
})
export class MvpModule { }
