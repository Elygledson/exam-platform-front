import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { environment } from 'environment';

export interface User {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(user: User): void {
    this.http.post(`${environment.api}/users`, { user }).pipe(take(1));
  }

  deleteUser(id: string): void {
    this.http.delete(`${environment.api}/users/${id}`).pipe(take(1));
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${environment.api}/users/${id}`).pipe(take(1));
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.api}/users`).pipe(take(1));
  }
}
