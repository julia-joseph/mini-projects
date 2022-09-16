import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expanding-cards',
  templateUrl: './expanding-cards.component.html',
  styleUrls: ['./expanding-cards.component.scss'],
})
export class ExpandingCardsComponent implements OnInit {
  cards: { name: string; image: string; isActive: boolean }[] = [
    {
      name: 'Deep Diving',
      image:
        'https://images.unsplash.com/photo-1600326145377-bcccb9a9daf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      isActive: true,
    },
    {
      name: 'Starways',
      image:
        'https://images.unsplash.com/photo-1663304709882-a7c78d78a049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      isActive: false,
    },
    {
      name: 'Grassy Croaks',
      image:
        'https://images.unsplash.com/photo-1545006398-2cf47cd87b90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=365&q=80',
      isActive: false,
    },
    {
      name: 'Golden Heaven',
      image:
        'https://images.unsplash.com/photo-1589912593528-1106d19aa17e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=379&q=80',
      isActive: false,
    },
    {
      name: 'Irony',
      image:
        'https://images.unsplash.com/photo-1530128118208-89f6ce02b37b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      isActive: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onImageClick(i: number) {
    this.cards = this.cards.map((card) => {
      return {
        ...card,
        isActive: false,
      };
    });
    this.cards[i].isActive = true;
  }
}
