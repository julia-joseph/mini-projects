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
    },
    {
      name: 'Dark Moon',
      url: 'https://images.unsplash.com/photo-1662970028661-533d31a176d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      name: 'Mossy Hills',
      url: 'https://images.unsplash.com/photo-1662913307002-ad2d32923913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80',
    },
    {
      name: 'Purple Petals',
      url: 'https://images.unsplash.com/photo-1662661573879-52ceee5c9bc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      name: 'Goldilions',
      url: 'https://images.unsplash.com/photo-1659806095303-6e75e9190d26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      name: 'Animans',
      url: 'https://images.unsplash.com/photo-1651473670044-b0b55012a3db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM2M3w2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
