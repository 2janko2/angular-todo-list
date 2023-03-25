import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        AuthRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule
    ],
    declarations: [
        AuthComponent
    ],
    exports: [
        MatProgressSpinnerModule
    ],
    providers: [],
})

export class AuthModule { }
