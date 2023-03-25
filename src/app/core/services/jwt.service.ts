import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class JwtService {
    getJwt(tokenKey: string) {
        return localStorage.getItem(tokenKey);
    }

    setJwt(tokenKey: string, tokenValue: string) {
        localStorage.setItem(tokenKey, tokenValue)
    }
}
