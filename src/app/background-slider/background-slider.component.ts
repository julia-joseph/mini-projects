import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-slider',
  templateUrl: './background-slider.component.html',
  styleUrls: ['./background-slider.component.scss'],
})
export class BackgroundSliderComponent implements OnInit {
  images = [
    {
      name: 'Blue Sea Mountains',
      url: 'https://images.unsplash.com/photo-1663947718652-fa32fb546da2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      isActive: true,
    },
    {
      name: 'Sun Stars',
      url: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      isActive: false,
    },
    {
      name: 'Mossy Hills',
      url: 'https://images.unsplash.com/photo-1662913307002-ad2d32923913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80',
      isActive: false,
    },
    {
      name: 'Purple Petals',
      url: 'https://images.unsplash.com/photo-1662661573879-52ceee5c9bc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      isActive: false,
    },
    {
      name: 'Grassy Greens',
      url: 'https://images.unsplash.com/photo-1508550536558-5e8d33eb9a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1329&q=80',
      isActive: false,
    },
    {
      name: 'Stary Nights',
      url: 'https://images.unsplash.com/photo-1662992672853-62155b6c3ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      isActive: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  prevImage() {
    const index = this.images.findIndex((img) => img.isActive);

    if (index === 0) {
      this.images[index].isActive = false;
      this.images[this.images.length - 1].isActive = true;
    } else {
      this.images[index].isActive = false;
      this.images[index - 1].isActive = true;
    }
  }

  nextImage() {
    const index = this.images.findIndex((img) => img.isActive);

    if (index === this.images.length - 1) {
      this.images[index].isActive = false;
      this.images[0].isActive = true;
    } else {
      this.images[index].isActive = false;
      this.images[index + 1].isActive = true;
    }
  }
}
