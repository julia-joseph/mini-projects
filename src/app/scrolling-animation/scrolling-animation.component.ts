import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolling-animation',
  templateUrl: './scrolling-animation.component.html',
  styleUrls: ['./scrolling-animation.component.scss'],
})
export class ScrollingAnimationComponent implements OnInit {
  boxes = [
    { isDisplayed: true },
    { isDisplayed: false },
    { isDisplayed: false },
    { isDisplayed: false },
    { isDisplayed: false },
    { isDisplayed: false },
    { isDisplayed: false },
    { isDisplayed: false },
    { isDisplayed: false },
    { isDisplayed: false },
    { isDisplayed: false },
  ];
  constructor() {}

  ngOnInit(): void {}
}
