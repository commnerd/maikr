import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropListComponent } from './drag-drop-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    DragDropListComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    DragDropListComponent
  ]
})
export class DragDropListModule { }
