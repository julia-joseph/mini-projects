import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkWaterComponent } from './drink-water.component';

const routes: Routes = [{ path: '', component: DrinkWaterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrinkWaterRoutingModule {}
