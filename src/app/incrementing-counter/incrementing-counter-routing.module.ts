import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncrementingCounterComponent } from './incrementing-counter.component';

const routes: Routes = [{ path: '', component: IncrementingCounterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncrementingCounterRoutingModule {}
