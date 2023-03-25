import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'any'
})

export class ApiService {
    constructor(private http: HttpClient) { }

    get(uriParam: string): Observable<any> {
        return this.http.get<Observable<any>>(`${environment.baseUrl}${uriParam}`).pipe(
            map((resp: any) => {
                return resp;
            }),
            catchError((error: any) => {
                return error;
            })
        )
    }

    post(endpoint: any, credentials: any): Observable<any> {
        return this.http.post<any>(
            `${environment.baseUrl}${endpoint}`, credentials
        )
            .pipe(
                tap((response: any) => response),
                catchError((error) => {
                    return error;
                })
            )
    }
}
