import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss'],
})
export class FaqItemComponent implements OnInit {
  @Input() question: string = '';
  @Input() answer: string = '';

  isExpanded: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  expandCollapse() {
    this.isExpanded = !this.isExpanded;
  }
}
