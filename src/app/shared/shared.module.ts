import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        CommonModule
        // if Shared imports smth, it should export it to make those components accessable 
    ],
    declarations: [
        LoaderComponent
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        CommonModule,
        LoaderComponent
        // if Shared imports smth, it should export it to make those components accessable 
    ],
    providers: [],
})
export class SharedModule { }
