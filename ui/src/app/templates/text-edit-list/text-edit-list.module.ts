import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditListComponent } from './text-edit-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    TextEditListComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    TextEditListComponent
  ]
})
export class TextEditListModule { }
