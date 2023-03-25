import {HttpClient, HttpHandler, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {finalize} from 'rxjs';
import {LoaderService} from '../services/loader.service';
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  activeRequests: number = 0;

  constructor(private loaderService: LoaderService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    request = request.clone({
      withCredentials: true,
      headers: new HttpHeaders().append("api-key", environment.apiKey)
    })
    if (this.activeRequests === 0) {
      this.loaderService.setLoading(true)
    }

    this.activeRequests++

    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.loaderService.setLoading(false)
        }
      })
    )
  }
}
