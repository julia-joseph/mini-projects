import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressStepsRoutingModule } from './progress-steps-routing.module';
import { ProgressStepsComponent } from './progress-steps.component';
import { StepComponent } from './step/step.component';

@NgModule({
  declarations: [ProgressStepsComponent, StepComponent],
  imports: [CommonModule, ProgressStepsRoutingModule],
})
export class ProgressStepsModule {}
