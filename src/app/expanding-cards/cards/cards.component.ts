import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() card: { name: string; image: string; isActive: boolean } | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log('initing', this.card);
  }
}
