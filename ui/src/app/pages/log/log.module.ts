import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from './log.component';
import { MainNavModule } from '@templates/main-nav/main-nav.module';
import { LogRoutingModule } from './log-routing.module';



@NgModule({
  declarations: [
    LogComponent
  ],
  imports: [
    CommonModule,
    LogRoutingModule,
    MainNavModule
  ]
})
export class LogModule { }
