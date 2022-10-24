import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast-notifications',
  templateUrl: './toast-notifications.component.html',
  styleUrls: ['./toast-notifications.component.scss'],
})
export class ToastNotificationsComponent implements OnInit {
  toasts: any[] = [];
  constructor() {}

  ngOnInit(): void {}

  addNotification() {
    const toast = { message: 'Something', color: '#00000' };

    this.toasts.push(toast);
  }

  deleteNotification() {
    setTimeout(() => {
      this.toasts.pop();
    }, 3000);
  }

  showNotification() {
    this.addNotification();
    this.deleteNotification();
  }
}
