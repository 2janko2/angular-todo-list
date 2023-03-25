import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements AfterViewInit, OnDestroy {
    isLoading: boolean = false;
    private loadingSubscription!: Subscription;

    constructor(private loader: LoaderService, private changeDetection: ChangeDetectorRef) { }

    ngAfterViewInit(): void {
        this.loadingSubscription = this.loader.loading$.subscribe({
            next: (status: any) => {
                this.isLoading = status;
                this.changeDetection.detectChanges();
            }
        })
    }

    ngOnDestroy(): void {
        this.loadingSubscription.unsubscribe();
    }
}
