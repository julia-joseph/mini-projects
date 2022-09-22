import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomChoicePickerComponent } from './random-choice-picker.component';

const routes: Routes = [
  {
    path: '',
    component: RandomChoicePickerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomChoicePickerRoutingModule {}
