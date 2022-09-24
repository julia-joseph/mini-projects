import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementing-counter',
  templateUrl: './incrementing-counter.component.html',
  styleUrls: ['./incrementing-counter.component.scss'],
})
export class IncrementingCounterComponent implements OnInit {
  items = [
    {
      name: 'Twitter',
      icon: 'fa-brands fa-twitter',
      totalCount: 7000,
      incrementStep: 50,
      count: 0,
    },
    {
      name: 'Youtube',
      icon: 'fa-brands fa-youtube',
      totalCount: 25000,
      incrementStep: 50,
      count: 0,
    },
    {
      name: 'Instagram',
      icon: 'fa-brands fa-instagram',
      totalCount: 8000,
      incrementStep: 50,
      count: 0,
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.setCounters();
  }

  setCounters() {
    this.items.forEach((item, i) => {
      this.setCounter(item, i);
    });
  }

  setCounter(item: any, i: number) {
    let increment = item.totalCount / 100;

    const interval = setInterval(() => {
      if (item.count < item.totalCount) {
        this.items[i].count += increment;
      } else {
        clearInterval(interval);
      }
    });
  }
}
