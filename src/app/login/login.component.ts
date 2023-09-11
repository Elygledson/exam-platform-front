import { Component } from '@angular/core';
import { AuthService, Login } from '../shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      //   this.authService.login({}).subscribe(
      //     (response: any) => {
      //       if (response && response.token) {
      //         this.router.navigate(['/admin']);
      //       }
      //     },
      //     (error: any) => {
      //       console.log('dsad');
      //     }
      //   );
      // }
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
