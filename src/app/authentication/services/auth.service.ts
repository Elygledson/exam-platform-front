import { Injectable } from '@angular/core';
import { DefaultCrudService } from '../../shared/services/default-crud.service';
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
      this.userData = response.data;
      localStorage.setItem('user', this.userData);
      localStorage.setItem('jwt', this.userData.token);
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
    return localStorage.getItem('jwt');
  }
}