import { Component } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
    private loading: boolean = true;

    constructor(public loader: LoaderService) {
        debugger;
        console.log(this.loader.getLoading());
        debugger;
     }
}