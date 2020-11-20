import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorBackEndInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = request.clone( {setHeaders: {}});
      const newReq = authReq.clone();
     
      return next.handle(newReq);
     //here use an arrow functio
    //return next.handle(request);

  }
}
