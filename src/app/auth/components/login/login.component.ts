import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  
  constructor(
    private formBuilder:FormBuilder,
    private router:Router
  ){
    this.buildLogInForm();
  }
  
  // esquema formulario
  loginForm!:FormGroup;
  private buildLogInForm(){
    this.loginForm = this.formBuilder.group({
      user: ['',
      [Validators.required,
      Validators.maxLength(20)]],

      password: ['',
      [Validators.required,
      Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
    })
  }

  // validaciones
  get userField(){ return this.loginForm.get('user'); }
  get passwordField(){ return this.loginForm.get('password'); }

  // accion del formulario
  handleSubmit(){
    this.router.navigate(['/']);
  }
}
