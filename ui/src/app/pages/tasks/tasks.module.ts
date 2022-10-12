import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { MainNavModule } from '@templates/main-nav/main-nav.module';
import { CenteredContentModule } from '@templates/centered-content/centered-content.module';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    TasksComponent,
    NewComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    TasksRoutingModule,
    MainNavModule,
    CenteredContentModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ]
})
export class TasksModule { }
