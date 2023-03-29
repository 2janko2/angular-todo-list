import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoComponent } from './todolist/todo/todo.component';
import { TaskComponent } from './todolist/todo/task/task.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import {NzRadioModule} from "ng-zorro-antd/radio";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoComponent,
    TaskComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    NzDrawerModule,
    CoreModule,
    SharedModule,
    AuthModule,
    AppRoutingModule,
    AuthRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NzRadioModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
