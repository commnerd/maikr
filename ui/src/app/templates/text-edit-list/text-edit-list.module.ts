import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditListComponent } from './text-edit-list.component';

import { TextEditModule } from '@templates/text-edit/text-edit.module';
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
    TextEditModule,
    DragDropModule
  ],
  exports: [
    TextEditListComponent
  ]
})
export class TextEditListModule { }
