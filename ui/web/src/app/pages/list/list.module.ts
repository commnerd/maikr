import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';

import { TextEditListModule } from '@templates/text-edit-list/text-edit-list.module';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    TextEditListModule
  ]
})
export class ListModule { }
