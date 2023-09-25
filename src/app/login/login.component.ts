import { Component } from '@angular/core';
import { AuthService, Login } from '../shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from '../shared/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackbar: SnackbarService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      if (
        this.email?.getRawValue() == 'teste@gmail.com' &&
        this.password?.getRawValue() == 'teste'
      ) {
        this.snackbar.showMessage('Login efetuado com sucesso!', true);
        this.router.navigate(['admin']);
      } else {
        this.snackbar.showMessage('Error ao fazer Login!', false);
      }
    }
  }
  navigateToRegister():void {
    this.router.navigate(['/register'])
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
