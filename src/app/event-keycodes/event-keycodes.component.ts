import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-keycodes',
  templateUrl: './event-keycodes.component.html',
  styleUrls: ['./event-keycodes.component.scss'],
})
export class EventKeycodesComponent implements OnInit {
  event: any = null;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('document:keypress', ['$event']) onKeyDown(event: any) {
    this.event = {
      key: event.key,
      code: event.code,
      keyCode: event.keyCode,
    };
  }
}
