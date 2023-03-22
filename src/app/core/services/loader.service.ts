import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LoaderService {
    loading$: BehaviorSubject<any> = new BehaviorSubject(false);

    constructor() { }

    setLoading(loading: boolean) {
        this.loading$.next(loading);
    }

    getLoading() {
        return this.loading$.next(false);
    }
}