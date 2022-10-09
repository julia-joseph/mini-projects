import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-placeholder',
  templateUrl: './content-placeholder.component.html',
  styleUrls: ['./content-placeholder.component.scss'],
})
export class ContentPlaceholderComponent implements OnInit {
  cardData = {
    imageUrl:
      'https://images.unsplash.com/photo-1596905904987-3dc12d4f0f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJvc2UlMjBmbG93ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    name: 'Rosy Petals',
    title: 'Rosy Petals Rain Down Gloriousness',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, accusamus.',
    author: {
      imageUrl: 'https://randomuser.me/api/portraits/women/82.jpg',
      name: 'Roselia Adams',
    },
    date: '23rd May 2023',
  };

  emptyCard = {
    imageUrl: '',
    name: '',
    title: '',
    description: '',
    author: {
      imageUrl: '',
      name: '',
    },
    date: '',
  };

  card = this.emptyCard;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.card = this.cardData;
    }, 2500);
  }
}
