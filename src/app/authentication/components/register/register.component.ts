import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  isEquals: boolean=true;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeatPassword:['',Validators.required]
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      if(this.registerForm.value.password== this.registerForm.value.repeatPassword)
      {
        this.isEquals=true

      }
      else{
        this.isEquals=false;
      }
      
    }
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }
}
