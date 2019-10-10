import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticatedGuardModule } from './authenticated.module';
import { AuthService } from '../../../auth/services/auth/auth.service';

@Injectable({
  providedIn: AuthenticatedGuardModule
})
export class AuthenticatedGuard implements CanActivate {

  constructor(
    private authService: AuthService
  ) { }

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      this.authService.logout();
      return false;
    }
    return true;
  }

}
