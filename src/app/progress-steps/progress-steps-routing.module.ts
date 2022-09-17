import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressStepsComponent } from './progress-steps.component';

const routes: Routes = [{ path: '', component: ProgressStepsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressStepsRoutingModule {}
