import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncrementingCounterRoutingModule } from './incrementing-counter-routing.module';
import { IncrementingCounterComponent } from './incrementing-counter.component';


@NgModule({
  declarations: [
    IncrementingCounterComponent
  ],
  imports: [
    CommonModule,
    IncrementingCounterRoutingModule
  ]
})
export class IncrementingCounterModule { }
