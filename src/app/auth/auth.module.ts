import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

import { AuthServiceModule } from './services/auth/auth.service.module';
import { AuthenticatedGuardModule } from './guards/auth/authenticated.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AuthServiceModule,
    AuthenticatedGuardModule
  ],
  exports: [],
  providers: [],
})
export class AuthModule { }
