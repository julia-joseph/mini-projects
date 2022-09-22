import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomChoicePickerRoutingModule } from './random-choice-picker-routing.module';
import { RandomChoicePickerComponent } from './random-choice-picker.component';
import { ChoiceComponent } from './choice/choice.component';


@NgModule({
  declarations: [
    RandomChoicePickerComponent,
    ChoiceComponent
  ],
  imports: [
    CommonModule,
    RandomChoicePickerRoutingModule
  ]
})
export class RandomChoicePickerModule { }
