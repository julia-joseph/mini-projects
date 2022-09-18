import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventKeycodesComponent } from './event-keycodes.component';

const routes: Routes = [{ path: '', component: EventKeycodesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventKeycodesRoutingModule {}
