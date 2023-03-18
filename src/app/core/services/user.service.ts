import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';
import { ApiService } from './api.service';


@Injectable()

export class UserService {

    constructor(private apiService: ApiService) { }

    auth(route: any, params: any): Observable<any> {
        return this.apiService.post(route, params);
    }
}
