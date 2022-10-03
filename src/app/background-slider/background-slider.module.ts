import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundSliderRoutingModule } from './background-slider-routing.module';
import { BackgroundSliderComponent } from './background-slider.component';
import { SlideComponent } from './slide/slide.component';


@NgModule({
  declarations: [
    BackgroundSliderComponent,
    SlideComponent
  ],
  imports: [
    CommonModule,
    BackgroundSliderRoutingModule
  ]
})
export class BackgroundSliderModule { }
