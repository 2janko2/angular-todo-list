import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';
import { LoaderService } from './services/loader.service';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [ApiService, HttpClient, UserService, LoaderService],
})
export class CoreModule { }
