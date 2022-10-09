import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawingPadComponent } from './drawing-pad.component';

const routes: Routes = [{ path: '', component: DrawingPadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrawingPadRoutingModule {}
