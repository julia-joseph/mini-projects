import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToastNotificationsComponent } from './toast-notifications.component';

const routes: Routes = [{ path: '', component: ToastNotificationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToastNotificationsRoutingModule {}
