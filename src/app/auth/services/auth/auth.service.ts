import { Injectable } from '@angular/core';
import { AuthServiceModule } from './auth.service.module';
import axios from 'axios';
import { Router } from '@angular/router';

@Injectable({
  providedIn: AuthServiceModule
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  auth(email: string, password: string) {
    return axios.post('auth', { email, password });
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
