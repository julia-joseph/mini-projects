import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-double-tap',
  templateUrl: './double-tap.component.html',
  styleUrls: ['./double-tap.component.scss'],
})
export class DoubleTapComponent implements OnInit {
  taps: number = 0;
  showHeart: boolean = false;
  heartPosition: { x: number; y: number } = { x: 0, y: 0 };

  constructor() {}

  ngOnInit(): void {}

  dblclick(e: any) {
    const x = e.clientX;
    const y = e.clientY;
    const offsetLeft = e.target.offsetLeft;
    const offsetTop = e.target.offsetTop;
    const innerX = x - offsetLeft;
    const innerY = y - offsetTop;
    console.log(x, y);
    console.log(innerX, innerY);
    this.heartPosition = {
      x: innerX,
      y: innerY,
    };
    this.showHeart = true;
    ++this.taps;
    setTimeout(() => {
      this.showHeart = false;
    }, 1000);
  }
}
