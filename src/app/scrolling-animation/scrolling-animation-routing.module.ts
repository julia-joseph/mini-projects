import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollingAnimationComponent } from './scrolling-animation.component';

const routes: Routes = [{ path: '', component: ScrollingAnimationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScrollingAnimationRoutingModule {}
