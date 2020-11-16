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
      response =>
    this.router.navigate(['/'])
  );
    
      
  }

}
