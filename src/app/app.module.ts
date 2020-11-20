import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToastrModule  } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from './pages/auth/token.interceptor';
import { AuthInterceptorBackEndInterceptor } from './pages/auth/auth-interceptor-back-end.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,   
    
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({timeOut: 3000,/*positionClass: 'inline'*/}),
    InputTextModule,
    TableModule,
    DialogModule,
    ButtonModule,
    
  ],
  providers: [
    //{provide: HTTP_INTERCEPTORS, useClass:AuthInterceptorBackEndInterceptor, multi:true},
    {     provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true   },
   

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
