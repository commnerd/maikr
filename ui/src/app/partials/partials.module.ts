import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    ListComponent
  ]
})
export class PartialsModule { }
