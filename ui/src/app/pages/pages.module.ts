import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DragDropListModule } from '../components/drag-drop-list/drag-drop-list.module';



@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DragDropListModule,
  ],
  exports: [
    PagesComponent
  ],
  bootstrap: [
    PagesComponent,
  ]
})
export class PagesModule { }
