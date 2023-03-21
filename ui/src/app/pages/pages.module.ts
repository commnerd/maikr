import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DragDropListModule } from '../components/drag-drop-list/drag-drop-list.module';
import { TaskListComponent } from './task-list/task-list.component';



@NgModule({
  declarations: [
    PagesComponent,
    TaskListComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    DragDropListModule
  ]
})
export class PagesModule { }
