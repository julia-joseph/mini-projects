import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinkWaterRoutingModule } from './drink-water-routing.module';
import { DrinkWaterComponent } from './drink-water.component';


@NgModule({
  declarations: [
    DrinkWaterComponent
  ],
  imports: [
    CommonModule,
    DrinkWaterRoutingModule
  ]
})
export class DrinkWaterModule { }
