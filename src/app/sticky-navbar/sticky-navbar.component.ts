import { Component, Host, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticky-navbar',
  templateUrl: './sticky-navbar.component.html',
  styleUrls: ['./sticky-navbar.component.scss'],
})
export class StickyNavbarComponent implements OnInit {
  isActive = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event']) onScroll(e: Event) {
    console.log('scrolling', window.scrollY);

    if (window.scrollY > 400) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  }
}
