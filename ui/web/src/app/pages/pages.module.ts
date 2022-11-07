import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CenteredContentModule } from '@templates/centered-content/centered-content.module';
import { MainNavModule } from '@templates/main-nav/main-nav.module';



@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MainNavModule,
    CenteredContentModule
  ]
})
export class PagesModule { }
