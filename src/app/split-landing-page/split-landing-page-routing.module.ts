import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplitLandingPageComponent } from './split-landing-page.component';

const routes: Routes = [{ path: '', component: SplitLandingPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplitLandingPageRoutingModule {}
