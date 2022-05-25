import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvpComponent } from './mvp.component';
import { MVPRoutingModule } from './mvp-routing.module';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    MvpComponent
  ],
  imports: [
    CommonModule,
    MVPRoutingModule,
    DragDropModule,
    MatInputModule
  ]
})
export class MvpModule { }
