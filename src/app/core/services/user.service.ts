import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';

import { ResultCodesEnum } from '../models/result-codes.model';
import { AuthResponse } from '../models/auth-response.model';
import { InputFormCredentials } from '../models/input-form-credentials.model';


@Injectable()

export class UserService {

    constructor(private apiService: ApiService,
        private jwtService: JwtService,
        private router: Router
    ) { }

    me(uriParam: string) {
        const jwtFromLS = this.jwtService.getJwt("currentUser")

        if (jwtFromLS !== null && jwtFromLS !== undefined) {
            console.log("Already logged IN");
            return;
        } else {
            this.checkCurrentUserSession(uriParam)
        }

    }

    checkCurrentUserSession(uriParam: string) {
        return this.apiService.get(uriParam).subscribe({
            next: (res) => {
                this.navigateToLogin(res);
            },
            error: (e) => {
                console.log(e);
            }
        })
    }

    navigateToLogin(res: AuthResponse) {
        if (res.resultCode === ResultCodesEnum.failure) {
            this.router.navigateByUrl("/auth")
        } else {
            console.log("Redirected You to the home page. Everything is ok");
        }
    }

    auth(endpoint: any, credentials: any): Observable<any> {
        return this.apiService.post(endpoint, credentials);
    }

    createSession(endpoint: string, credentials: InputFormCredentials, errors: any[]) {
        return this.auth(endpoint, credentials)
            .subscribe({
                next: (data) => {
                    this.jwtService.setJwt('user', data.jwt)
                    console.log(data);
                },
                error: (data) => {
                    errors = data;
                }
            })
    }


}
