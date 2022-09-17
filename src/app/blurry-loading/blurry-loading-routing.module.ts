import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlurryLoadingComponent } from './blurry-loading.component';

const routes: Routes = [{ path: '', component: BlurryLoadingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlurryLoadingRoutingModule {}
