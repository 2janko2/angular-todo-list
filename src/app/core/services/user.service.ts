import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";

import {ApiService} from './api.service';
import {JwtService} from './jwt.service';

import {ResultCodesEnum} from '../models/result-codes.model';
import {AuthResponse} from '../models/auth-response.model';
import {InputFormCredentials} from '../models/input-form-credentials.model';


@Injectable()

export class UserService {

  constructor(private apiService: ApiService,
              private jwtService: JwtService,
              private router: Router,
  ) {
  }

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
        this.navigate(res);
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

  findCurrentUserLocation() {
    return this.router.url;
  }

  navigate(res: AuthResponse) {
    switch (res.resultCode) {
      case ResultCodesEnum.failure:
        this.router.navigateByUrl("/auth");
        break;
      case ResultCodesEnum.success:
        this.router.navigateByUrl("")
        break;
      default:
        this.router.navigateByUrl("/auth")
    }
  }

  auth(endpoint: string, credentials: InputFormCredentials): Observable<any> {
    return this.apiService.post(endpoint, credentials);
  }

  createSession(endpoint: string, credentials: InputFormCredentials): Observable<any> {
    return this.auth(endpoint, credentials)
      .pipe(map((data) => {
        this.jwtService.setJwt('currentUser', data.data.userId)
        return data;
      }))
  }


}
