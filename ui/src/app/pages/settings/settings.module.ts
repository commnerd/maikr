import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';

import { CenteredContentModule } from '@templates/centered-content/centered-content.module';
import { MainNavModule } from '@templates/main-nav/main-nav.module';

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    CenteredContentModule,
    MainNavModule
  ]
})
export class SettingsModule { }
