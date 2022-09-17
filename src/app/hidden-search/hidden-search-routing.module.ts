import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HiddenSearchComponent } from './hidden-search.component';

const routes: Routes = [{ path: '', component: HiddenSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HiddenSearchRoutingModule {}
