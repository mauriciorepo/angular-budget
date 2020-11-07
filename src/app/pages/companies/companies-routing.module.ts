import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyListComponent } from './company-list/company-list.component';

const routes: Routes = [
  {path:'',component:CompanyListComponent},//nomedosite.com/companies -> list
  {path:':new', component:CompanyFormComponent},//nomedosite.com/companies/:id -> form
  {path:':id/edit', component:CompanyFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
