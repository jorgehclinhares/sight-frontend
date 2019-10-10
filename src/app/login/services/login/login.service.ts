import { Injectable } from '@angular/core';
import { LoginServiceModule } from './login.service.module';
import axios from 'axios';

@Injectable({
  providedIn: LoginServiceModule
})
export class LoginService {

  constructor() { }

  auth(email: string, password: string) {
    return axios.post('auth', { email, password });
  }

  registryData(token: string, user: User) {
    localStorage.clear();
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

}
