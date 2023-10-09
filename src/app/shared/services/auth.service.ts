import { Injectable } from '@angular/core';
import { DefaultCrudService } from './default-crud.service';
import { User } from 'src/app/exam-generator/exam-generator.component';
import { LoginInterface } from '../interfaces/login.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userData: any;
  constructor(
    private crudService: DefaultCrudService,
    private router: Router
  ) {}

  login(login: LoginInterface): void {
    this.crudService.httpPost('auth/login', login).then((response) => {
      console.log(response);
      this.userData = response.data;
      localStorage.setItem('user', this.userData.data.token);
      this.router.navigate(['/admin']);
    });
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  getToken(): string | null {
    return this.userData.data.token;
  }
}
