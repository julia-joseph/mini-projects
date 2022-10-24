import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoubleVerticalSliderComponent } from './double-vertical-slider.component';

const routes: Routes = [{ path: '', component: DoubleVerticalSliderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoubleVerticalSliderRoutingModule {}
