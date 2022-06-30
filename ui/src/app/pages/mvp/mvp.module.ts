import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MvpComponent } from './mvp.component';
import { MVPRoutingModule } from './mvp-routing.module';
import { TextEditListModule } from '@templates/text-edit-list/text-edit-list.module';
import { MainNavModule } from '@templates/main-nav/main-nav.module';
import { CenteredContentModule } from '@templates/centered-content/centered-content.module';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    MvpComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MVPRoutingModule,
    TextEditListModule,
    MainNavModule,
    CenteredContentModule
  ]
})
export class MvpModule { }
