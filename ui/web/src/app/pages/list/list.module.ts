import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';

import { DragDropListModule } from '@components/drag-drop-list/drag-drop-list.module';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    DragDropListModule
  ]
})
export class ListModule { }
