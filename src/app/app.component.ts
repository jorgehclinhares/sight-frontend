import { Component } from '@angular/core';
import axios from 'axios';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {
    axios.defaults.baseURL = environment.sight.back;
  }
}
