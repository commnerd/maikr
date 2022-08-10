import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { MainNavModule } from '@templates/main-nav/main-nav.module';
import { ListRoutingModule } from './list-routing.module';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    MainNavModule
  ]
})
export class ListModule { }
