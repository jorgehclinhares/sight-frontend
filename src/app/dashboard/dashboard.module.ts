import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatTableModule, MatCardModule, MatRippleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardServiceModule } from './services/dashboard.service.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    MatCardModule,
    MatRippleModule,
    FlexLayoutModule,
    DashboardServiceModule
  ],
  exports: [],
  providers: [],
})
export class DashboardModule { }
