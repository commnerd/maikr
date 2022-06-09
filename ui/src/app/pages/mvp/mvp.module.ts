import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MvpComponent } from './mvp.component';
import { MVPRoutingModule } from './mvp-routing.module';
import { TextEditModule } from 'src/app/templates/text-edit/text-edit.module';
import { MainNavModule } from '@templates/main-nav/main-nav.module';
import { CenteredContentModule } from '@templates/centered-content/centered-content.module';

@NgModule({
  declarations: [
    MvpComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MVPRoutingModule,
    DragDropModule,
    TextEditModule,
    MainNavModule,
    CenteredContentModule
  ]
})
export class MvpModule { }
