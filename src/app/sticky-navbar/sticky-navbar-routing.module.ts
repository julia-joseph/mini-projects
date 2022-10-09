import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StickyNavbarComponent } from './sticky-navbar.component';

const routes: Routes = [{ path: '', component: StickyNavbarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StickyNavbarRoutingModule {}
