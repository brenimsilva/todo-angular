import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './container/container.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { MaterialModule } from './material/material.module';
import { TaskListComponent } from './task-list/task-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TaskEditModalComponent } from './task-edit-modal/task-edit-modal.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskEditModalComponent,
    HomeComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }