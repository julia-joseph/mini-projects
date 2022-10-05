import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeClockComponent } from './theme-clock.component';

const routes: Routes = [{ path: '', component: ThemeClockComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeClockRoutingModule {}
