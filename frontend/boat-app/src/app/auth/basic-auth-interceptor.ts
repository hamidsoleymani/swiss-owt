import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const basicAuthInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);

  if (!authService.isLoggedIn()) {
    return next(req);
  }

  const authenticatedRequest = req.clone({
    setHeaders: {
      Authorization: authService.authorizationHeader()
    }
  });

  return next(authenticatedRequest);
};
