import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';


@Injectable({
    providedIn: 'any'
})
export class ApiService {
    private formatErrors(error: any) {
        return throwError(error.error);
    }

    constructor(private http: HttpClient) { }

    post(route: any, params: any): Observable<any> {
        return this.http.post<any>(`${environment.baseUrl}/auth/login`,
            { email: 'ivan.khlysta@gmail.com', password: '1044' })
            .pipe(
                tap((n: any) => {
                    console.log(n);
                    debugger;
                }),
                catchError((error) => {
                    console.log(error);
                    return error;
                })
            )
    }
}
