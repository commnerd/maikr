import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MvpComponent } from './mvp.component';
import { MVPRoutingModule } from './mvp-routing.module';
import { TextEditModule } from 'src/app/templates/text-edit/text-edit.module';

@NgModule({
  declarations: [
    MvpComponent
  ],
  imports: [
    CommonModule,
    MVPRoutingModule,
    DragDropModule,
    TextEditModule,
  ]
})
export class MvpModule { }
