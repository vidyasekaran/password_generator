import { Component } from '@angular/core';

import {FormGroup, FormControl, FormControlName} from '@angular/forms'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm=new FormGroup({

    user: new FormControl(''),
    password: new FormControl(''),
    })

    loginUser() 
    { console.log(this.loginForm.value); }

}
