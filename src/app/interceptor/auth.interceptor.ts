// auth.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { AuthService } from '../shared/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // if (this.authService.isAuthenticated()) {
    //   console.log('dsjadk');
    //   const token = this.authService.getToken();
    //   console.log('ds', token);
    //   const authReq = req.clone({
    //     setHeaders: { Authorization: `Bearer ${token}` },
    //   });
    //   return next.handle(authReq);
    // }
    return next.handle(req);
  }
}
