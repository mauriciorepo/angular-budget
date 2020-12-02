import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderservicesRoutingModule } from './orderservices-routing.module';

import { OrderserviceListComponent } from './orderservice-list/orderservice-list.component';
import { OrderserviceFormComponent } from './orderservice-form/orderservice-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';



@NgModule({
  declarations: [ OrderserviceListComponent, OrderserviceFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OrderservicesRoutingModule,
    TableModule,
    DropdownModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    TabViewModule

    
  ]
})
export class OrderservicesModule { }
