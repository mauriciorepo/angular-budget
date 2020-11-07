import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  
  {path:'companies', loadChildren:()=>import('src/app/pages/companies/companies.module').then(m=>m.CompaniesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//nome.do.site/companies -> 