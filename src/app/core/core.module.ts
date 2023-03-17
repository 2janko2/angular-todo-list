import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ApiService } from './services/api.service';
import { InMemoryDataService } from './services/in-memory-data.service copy';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        InMemoryWebApiModule.forFeature(InMemoryDataService),
        HttpClientInMemoryWebApiModule.forFeature(InMemoryDataService),
        HttpClientModule
    ],
    providers: [ApiService, HttpClient],
})
export class CoreModule { }
