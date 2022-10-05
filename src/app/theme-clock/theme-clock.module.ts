import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeClockRoutingModule } from './theme-clock-routing.module';
import { ThemeClockComponent } from './theme-clock.component';


@NgModule({
  declarations: [
    ThemeClockComponent
  ],
  imports: [
    CommonModule,
    ThemeClockRoutingModule
  ]
})
export class ThemeClockModule { }
