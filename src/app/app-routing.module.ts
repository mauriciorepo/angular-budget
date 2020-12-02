import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrderservicesModule } from './pages/orderservices/orderservices.module';

const routes: Routes = [
  
  {path:'login', component: LoginComponent},
  {path:'companies', loadChildren:()=>import('src/app/pages/companies/companies.module').then(m=>m.CompaniesModule)},
  {path:'orderservices' , loadChildren:()=> import('src/app/pages/orderservices/orderservices.module').then(m=>m.OrderservicesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//nome.do.site/companies -> 