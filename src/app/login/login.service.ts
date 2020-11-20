import { HttpClient,  HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

 

submitLogin(userName: string, password: string):Observable<any>{
  const params= new HttpParams()
      .set('username', userName)
      .set('password', password)
      .set('grant_type', 'password') 
      //.set('scope', 'read') 
  const headers = {
    
    'Authorization' : 'Basic ' + btoa(`${environment.CLIENT_ID}:${environment.CLIENT_SECRET}`),
    
    'Content-Type': 'application/x-www-form-urlencoded'
    
      

  
  }
  console.log(headers);
  console.log(params);
  return this.http.post(`${environment.OAUTH}`,params.toString(), {headers: headers});
}

}
