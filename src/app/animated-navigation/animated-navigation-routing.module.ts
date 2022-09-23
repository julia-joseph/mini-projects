import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimatedNavigationComponent } from './animated-navigation.component';

const routes: Routes = [{ path: '', component: AnimatedNavigationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimatedNavigationRoutingModule {}
