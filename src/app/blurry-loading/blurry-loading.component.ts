import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blurry-loading',
  templateUrl: './blurry-loading.component.html',
  styleUrls: ['./blurry-loading.component.scss'],
})
export class BlurryLoadingComponent implements OnInit {
  loadingPercent: number = 0;
  blurAmount: number = 30;
  loadingTextOpacity: number = 1;
  loadingInterval: any;

  constructor() {}

  ngOnInit(): void {
    this.loadImage();
  }

  loadImage() {
    this.loadingInterval = setInterval(() => {
      ++this.loadingPercent;
      this.blurAmount = this.scale(this.loadingPercent, 0, 100, 30, 0);
      this.loadingTextOpacity = this.scale(this.loadingPercent, 0, 100, 1, 0);
      if (this.loadingPercent > 99) {
        clearInterval(this.loadingInterval);
      }
    }, 15);
  }

  scale(
    value: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
  ) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }
}
