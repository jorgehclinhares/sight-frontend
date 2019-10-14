import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    MainComponent
  ],
  providers: [],
})
export class MainModule { }
