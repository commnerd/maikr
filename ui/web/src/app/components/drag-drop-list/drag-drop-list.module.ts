import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropListComponent } from './drag-drop-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TextEditModule } from '@components/text-edit/text-edit.module';

import { ListItemFactoryService } from 'src/app/services/list-item-factory.service';

@NgModule({
  declarations: [
    DragDropListComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    TextEditModule
  ],
  exports: [
    DragDropListComponent
  ],
  providers: [
    ListItemFactoryService
  ]
})
export class DragDropListModule { }
