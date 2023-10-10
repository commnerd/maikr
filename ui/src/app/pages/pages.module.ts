import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  providers: [
    HttpClient,
  ],
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
