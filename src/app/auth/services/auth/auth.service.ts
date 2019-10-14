import { Injectable } from '@angular/core';
import { AuthServiceModule } from './auth.service.module';
import { Router } from '@angular/router';
import { AxiosRequest } from '../../../shared/classes/axios.class';

@Injectable({
  providedIn: AuthServiceModule
})
export class AuthService extends AxiosRequest {

  constructor(
    private router: Router
  ) {
    super();
  }

  auth(email: string, password: string) {
    return this.axiosNoAuth.post('auth', { email, password });
  }

  registryData(token: string, user: User) {
    localStorage.clear();
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
