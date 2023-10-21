// auth.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { AuthService } from '../authentication/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this.authService.isAuthenticated()) {
      const token = this.authService.getToken();
      const authReq = req.clone({
        setHeaders: { auth: `${token}` },
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
