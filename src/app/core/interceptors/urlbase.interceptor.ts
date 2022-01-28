import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UrlbaseInterceptor implements HttpInterceptor {

  constructor(
    @Inject('BASE_API_URL') private urlbase: string
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const apiReq = request.clone(
      {
        url: `${this.urlbase}/${request.url}`
      });

    return next.handle(apiReq);
  }
}
