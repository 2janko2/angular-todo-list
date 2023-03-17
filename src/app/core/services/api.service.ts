import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'any'
})
export class ApiService {
    constructor(private http: HttpClient) { }

    post(route: any, params: any) {
        debugger;
        this.http.post<any>(route, params).subscribe((data) => {
            debugger;
        })
    }
}
