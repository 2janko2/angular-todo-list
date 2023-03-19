import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class JwtService {
    getJwt(tokenKey: string) {
        const jwt = localStorage.getItem(tokenKey);
        console.log(typeof jwt);
        console.log(jwt);
        debugger;
        return jwt;

    }

    setJwt(tokenKey: string, tokenValue: string) {
        localStorage.setItem(tokenKey, tokenValue)
    }
}