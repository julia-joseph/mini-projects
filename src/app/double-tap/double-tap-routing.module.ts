import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoubleTapComponent } from './double-tap.component';

const routes: Routes = [
  {
    path: '',
    component: DoubleTapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoubleTapRoutingModule {}
