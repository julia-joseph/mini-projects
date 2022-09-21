import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqCollapseComponent } from './faq-collapse.component';

const routes: Routes = [{ path: '', component: FaqCollapseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqCollapseRoutingModule {}
