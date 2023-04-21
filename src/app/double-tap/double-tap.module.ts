import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoubleTapRoutingModule } from './double-tap-routing.module';
import { DoubleTapComponent } from './double-tap.component';


@NgModule({
  declarations: [
    DoubleTapComponent
  ],
  imports: [
    CommonModule,
    DoubleTapRoutingModule
  ]
})
export class DoubleTapModule { }
