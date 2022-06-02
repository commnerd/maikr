import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { TextEditComponent } from './text-edit.component';



@NgModule({
  declarations: [
    TextEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    TextEditComponent
  ]
})
export class TextEditModule { }
