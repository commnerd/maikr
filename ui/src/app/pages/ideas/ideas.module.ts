import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { IdeasRoutingModule } from './ideas-routing.module';
import { IdeaService } from 'src/app/services/idea.service';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  providers: [
    IdeaService
  ],
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    IdeasRoutingModule,
    DragDropModule,
  ]
})
export class IdeasModule { }
