import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RipplingButtonRoutingModule } from './rippling-button-routing.module';
import { RipplingButtonComponent } from './rippling-button.component';


@NgModule({
  declarations: [
    RipplingButtonComponent
  ],
  imports: [
    CommonModule,
    RipplingButtonRoutingModule
  ]
})
export class RipplingButtonModule { }
