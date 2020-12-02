import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderserviceFormComponent } from './orderservice-form/orderservice-form.component';
import { OrderserviceListComponent } from './orderservice-list/orderservice-list.component';

const routes: Routes = [
  {  path:'', component: OrderserviceListComponent},
  {path: ':new', component:OrderserviceFormComponent},
  {path: ':id/edit', component:OrderserviceFormComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderservicesRoutingModule { }
