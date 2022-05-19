import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from '@pages/project/project.component';
import { NewComponent } from '@pages/project/new/new.component';
import { ProjectService } from '@services/project.service';

@NgModule({
  declarations: [
    ProjectComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    ProjectRoutingModule,
  ],
  providers: [ProjectService],
})
export class ProjectModule { }
