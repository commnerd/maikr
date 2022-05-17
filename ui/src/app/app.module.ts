import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from '@pages/project/project.component';
import { NewComponent } from './pages/project/new/new.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditComponent } from './pages/project/edit/edit.component';
import { FormComponent } from './pages/project/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    NewComponent,
    EditComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
