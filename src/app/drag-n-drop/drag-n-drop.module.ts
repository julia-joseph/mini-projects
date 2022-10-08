import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragNDropRoutingModule } from './drag-n-drop-routing.module';
import { DragNDropComponent } from './drag-n-drop.component';


@NgModule({
  declarations: [
    DragNDropComponent
  ],
  imports: [
    CommonModule,
    DragNDropRoutingModule
  ]
})
export class DragNDropModule { }
