import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundSliderComponent } from './background-slider.component';

const routes: Routes = [{ path: '', component: BackgroundSliderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackgroundSliderRoutingModule {}
