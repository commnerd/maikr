import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { NewComponent } from './new/new.component';
// import { ProjectsService } from '@services/projects.service';
import { DefinitionComponent } from './definition/definition.component';
import { MainNavModule } from '@templates/main-nav/main-nav.module';
import { CenteredContentModule } from '@templates/centered-content/centered-content.module';

@NgModule({
  declarations: [
    ProjectsComponent,
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
    ProjectsRoutingModule,
    MainNavModule,
    CenteredContentModule
  ],
  // providers: [ProjectsService],
  providers: [],

})
export class ProjectsModule { }
