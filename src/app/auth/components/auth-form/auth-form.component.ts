import { Component, Input } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {

  constructor(
    private formBuilder:FormBuilder,
    private router:Router
  ) {
    this.builAuthForm();
  }

  // validar si se esta registrando si está ingresando
  @Input() isInLoginView!:boolean;

  // esquema del formulario
  authForm!:FormGroup;
  private builAuthForm(){
    this.authForm = this.formBuilder.group({
      user: ['',
        [Validators.required,
        Validators.maxLength(20)]
      ],
      
      email: ['',
        [Validators.email,
          Validators.maxLength(50)
        ]
      ],

      password: ['',
      [Validators.required,
      Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
    });
  }

  // validaciones de los campos del formulario}
  get userField(){ return this.authForm.get('user') }
  get passwordField(){ return this.authForm.get('password') }
  get emailField(){ return this.authForm.get('email') }

  // accion del formulario
  handleSubmit(){
    this.isInLoginView ? alert('Ingresaste a la aplicación') : alert('Te registraste');
  }

  // cambiar auth
  changeAuthState(){
    if (this.isInLoginView) {
      this.isInLoginView = false;
      this.router.navigate(['/register']);
    }else{
      this.isInLoginView = true;
      this.router.navigate(['/login']);
    }

  }

}
