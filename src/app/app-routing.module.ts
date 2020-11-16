import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  {path:'login', component: LoginComponent},
  {path:'companies', loadChildren:()=>import('src/app/pages/companies/companies.module').then(m=>m.CompaniesModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//nome.do.site/companies -> 