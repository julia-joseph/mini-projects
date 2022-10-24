import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-double-vertical-slider',
  templateUrl: './double-vertical-slider.component.html',
  styleUrls: ['./double-vertical-slider.component.scss'],
})
export class DoubleVerticalSliderComponent implements OnInit {
  index: number = 0;
  showTransform: boolean = false;
  images = [
    {
      url: 'https://media.istockphoto.com/photos/watermelon-pattern-red-watermelon-on-blue-background-summer-concept-picture-id1145766400?b=1&k=20&m=1145766400&s=170667a&w=0&h=DEQ9c4FH-ch_0BLSbcPehU3CvxVChqnL2xpqWDDpHN4=',
      name: 'Watermelon',
      backgroundColor: '#dc143c',
    },
    {
      url: 'https://media.istockphoto.com/photos/grapefruit-sliced-on-pastel-pink-background-minimal-fruit-concept-picture-id860587952?b=1&k=20&m=860587952&s=170667a&w=0&h=DENeYTCPsxo0ypsSYWARgHm0eAROtdJRYtDr-00_R3g=',
      name: 'Orangiro',
      backgroundColor: '#6495ed',
    },
    {
      url: 'https://images.unsplash.com/photo-1599763113291-e85923e84ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbG9yZnVsJTIwZnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Strawberry',
      backgroundColor: '#9f1a1a',
    },
  ];
  image = this.images[0];

  constructor() {}

  ngOnInit(): void {
    // this.createAnim();
  }

  createAnim() {
    const time = (this.image.name.split('').length + 1) * 100;
    setTimeout(() => {
      this.showTransform = true;
    }, time - 100);
    setTimeout(() => {
      this.showTransform = false;
    }, time * 2);
  }

  next() {
    this.showTransform = false;
    if (this.index >= this.images.length - 1) {
      this.index = 0;
    } else {
      ++this.index;
    }
    this.image = this.images[this.index];
    // this.createAnim();
  }

  prev() {
    this.showTransform = false;
    if (this.index < 1) {
      this.index = this.images.length - 1;
    } else {
      --this.index;
    }
    this.image = this.images[this.index];
    // this.createAnim();
  }
}
