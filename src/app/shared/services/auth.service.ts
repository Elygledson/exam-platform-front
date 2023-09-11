import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment';
import { take } from 'rxjs';

export interface Login {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: Login): void {
    this.http.post(`${environment.api}/authentication/login`, { user });
  }

  logout(): void {}
}
