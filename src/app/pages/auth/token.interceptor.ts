import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
   const tokenString = localStorage.getItem('access_token');
   console.log(tokenString)
   if(tokenString){
     console.log('entrou')
     const token= JSON.parse(tokenString);
     const jwt= token.access_token;
     request=request.clone({
       setHeaders:{
        
        
         Authorization: 'Bearer ' + jwt
       }
     })
   }
    return next.handle(request);
  }
}
