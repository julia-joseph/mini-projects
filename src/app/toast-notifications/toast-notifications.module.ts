import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastNotificationsRoutingModule } from './toast-notifications-routing.module';
import { ToastNotificationsComponent } from './toast-notifications.component';


@NgModule({
  declarations: [
    ToastNotificationsComponent
  ],
  imports: [
    CommonModule,
    ToastNotificationsRoutingModule
  ]
})
export class ToastNotificationsModule { }
