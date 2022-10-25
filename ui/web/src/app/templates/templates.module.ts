import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditModule } from './text-edit/text-edit.module';
import { CenteredContentComponent } from './centered-content/centered-content.component';

@NgModule({
  declarations: [
    CenteredContentComponent
  ],
  imports: [
    CommonModule,
    TextEditModule
  ]
})
export class TemplatesModule { }
