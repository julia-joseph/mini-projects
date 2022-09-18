import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormWaveAnimationRoutingModule } from './form-wave-animation-routing.module';
import { FormWaveAnimationComponent } from './form-wave-animation.component';
import { FormWaveLabelComponent } from './form-wave-label/form-wave-label.component';

@NgModule({
  declarations: [FormWaveAnimationComponent, FormWaveLabelComponent],
  imports: [CommonModule, FormWaveAnimationRoutingModule],
})
export class FormWaveAnimationModule {}
