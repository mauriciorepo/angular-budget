import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderService } from './orderservice.model';
import { OrderServiceItems } from './orderserviceitems.model';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) { }

create(order: OrderService):Observable<OrderService>{
  return this.http.post<OrderService>(`${environment.BUDGET_API}/api/orders-service`,order)
}

getAll():Observable<OrderService[]>{
   return this.http.get<OrderService[]>(`${environment.BUDGET_API}/api/orders-service`)
}

getById(id: number):Observable<OrderService>{
  return this.http.get<OrderService>(`${environment.BUDGET_API}/api/orders-service/${id}`)
}

update(order: OrderService):Observable<OrderService>{
  return this.http.put<OrderService>(`${environment.BUDGET_API}/api/orders-service/${order.id}`,order)
}

delete(id: number):Observable<OrderServiceItems>{
  return this.http.delete<OrderServiceItems>(`$${environment.BUDGET_API}/api/orders-service/${id}`)
}

}
