import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoubleVerticalSliderRoutingModule } from './double-vertical-slider-routing.module';
import { DoubleVerticalSliderComponent } from './double-vertical-slider.component';


@NgModule({
  declarations: [
    DoubleVerticalSliderComponent
  ],
  imports: [
    CommonModule,
    DoubleVerticalSliderRoutingModule
  ]
})
export class DoubleVerticalSliderModule { }
