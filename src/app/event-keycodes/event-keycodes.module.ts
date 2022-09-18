import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventKeycodesRoutingModule } from './event-keycodes-routing.module';
import { EventKeycodesComponent } from './event-keycodes.component';


@NgModule({
  declarations: [
    EventKeycodesComponent
  ],
  imports: [
    CommonModule,
    EventKeycodesRoutingModule
  ]
})
export class EventKeycodesModule { }
