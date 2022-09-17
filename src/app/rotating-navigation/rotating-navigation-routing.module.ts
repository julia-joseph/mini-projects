import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotatingNavigationComponent } from './rotating-navigation.component';

const routes: Routes = [{ path: '', component: RotatingNavigationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RotatingNavigationRoutingModule {}
