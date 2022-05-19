import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { NewComponent } from './new/new.component';
import { ProjectService } from '@services/project.service';
import { DefinitionComponent } from './definition/definition.component';

@NgModule({
  declarations: [
    ProjectComponent,
    NewComponent,
    DefinitionComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    ProjectRoutingModule,
  ],
  providers: [ProjectService],
})
export class ProjectModule { }
