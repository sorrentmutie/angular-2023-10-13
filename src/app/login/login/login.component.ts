import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router){

  }
   login(){
      this.loginService.login("","").subscribe(
        loggedIn => {
               if(loggedIn) this.router.navigate(['/products']);
        }
      )
   }
}
