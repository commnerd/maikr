import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropListComponent } from './drag-drop-list.component';



@NgModule({
  declarations: [
    DragDropListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DragDropListComponent
  ]
})
export class DragDropListModule { }
