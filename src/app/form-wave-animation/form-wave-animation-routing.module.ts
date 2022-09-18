import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormWaveAnimationComponent } from './form-wave-animation.component';

const routes: Routes = [{ path: '', component: FormWaveAnimationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormWaveAnimationRoutingModule {}
