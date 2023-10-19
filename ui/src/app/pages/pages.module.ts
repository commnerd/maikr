import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  providers: [
    HttpClient,
  ],
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
