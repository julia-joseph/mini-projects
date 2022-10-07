import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RipplingButtonComponent } from './rippling-button.component';

const routes: Routes = [
  {
    path: '',
    component: RipplingButtonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RipplingButtonRoutingModule {}
