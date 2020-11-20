import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from './company.model';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

getAll():Observable<Company[]>{
  const tokenString = localStorage.getItem('access_token');
  const token= JSON.parse(tokenString)
  const headers= {
    'Authorization' : 'Bearer' + token.access_token

  }
  return this.http.get<Company[]>(`${environment.BUDGET_API}/api/companies/all`, {headers});
}

getAllPageable(page, size):Observable<any>{
  const params = new HttpParams()
  .set('page', page)
  .set('size', size)
  return this.http.get<any>(`${environment.BUDGET_API}/api/companies?${params.toString}`)
}
getById(id: number): Observable<Company>{
  return this.http.get<Company>(`${environment.BUDGET_API}/api/companies/${id}`)
}

editCompany( company: Company): Observable<Company>{
  return this.http.put<Company>(`${environment.BUDGET_API}/api/companies/${company.id}`, company);
}
createCompany(company: Company):Observable<Company>{
  return this.http.post<Company>(`${environment.BUDGET_API}/api/companies`, company)
}

deleteCompany(id: number): Observable<any>{
     return this.http.delete<any>(`${environment.BUDGET_API}/companies/${id}`).pipe(
       map(()=>null)
       
       
       
     )
}


}
