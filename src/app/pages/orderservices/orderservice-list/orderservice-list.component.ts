import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/orderservice.model';
import { OrderServiceService } from '../shared/orderService.service';


@Component({
  selector: 'app-orderservice-list',
  templateUrl: './orderservice-list.component.html',
  styleUrls: ['./orderservice-list.component.css']
})
export class OrderserviceListComponent implements OnInit {

  listOrder: OrderService[];
  constructor(
    private orderServiceService:OrderServiceService
  ) { }

  ngOnInit(): void {
    this.listOrderServices()
  }

  listOrderServices(){
    this.orderServiceService.getAll().subscribe(
      list=> this.listOrder=list
    )
    
  }

}
