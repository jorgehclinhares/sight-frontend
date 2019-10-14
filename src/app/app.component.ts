import { Component } from '@angular/core';
import axios from 'axios';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    axios.defaults.baseURL = environment.sight.back;
  }
}
