import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

userName: string;
password: string;
  constructor(
    private loginService: LoginService,
    private router: Router
    ) { }

  submitLogin(){
     
  this.loginService.submitLogin(this.userName, this.password). subscribe(
      response =>{
        const access_token = JSON.stringify(response);
        localStorage.setItem('access_token',access_token)
    this.router.navigate(['/'])
      }
    );
    
      
  }

}
