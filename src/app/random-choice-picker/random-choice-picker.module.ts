import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomChoicePickerRoutingModule } from './random-choice-picker-routing.module';
import { RandomChoicePickerComponent } from './random-choice-picker.component';
import { ChoiceComponent } from './choice/choice.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RandomChoicePickerComponent, ChoiceComponent],
  imports: [CommonModule, RandomChoicePickerRoutingModule, FormsModule],
})
export class RandomChoicePickerModule {}
