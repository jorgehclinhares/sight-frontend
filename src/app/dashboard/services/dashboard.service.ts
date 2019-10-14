import { Injectable } from '@angular/core';
import { DashboardServiceModule } from './dashboard.service.module';
import { AxiosRequest } from '../../shared/classes/axios.class';

@Injectable({
  providedIn: DashboardServiceModule
})
export class DashboardService extends AxiosRequest {

  constructor() {
    super();
  }

  dashboard() {
    return this.axios.get('dashboard');
  }

}
