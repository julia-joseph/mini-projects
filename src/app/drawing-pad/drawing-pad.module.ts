import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawingPadRoutingModule } from './drawing-pad-routing.module';
import { DrawingPadComponent } from './drawing-pad.component';

@NgModule({
  declarations: [DrawingPadComponent],
  imports: [CommonModule, DrawingPadRoutingModule],
})
export class DrawingPadModule {}
