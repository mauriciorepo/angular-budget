import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {InputMaskModule} from 'primeng/inputmask';
@NgModule({
  declarations: [CompanyListComponent, CompanyFormComponent],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule
    
  ]
})
export class CompaniesModule { }
