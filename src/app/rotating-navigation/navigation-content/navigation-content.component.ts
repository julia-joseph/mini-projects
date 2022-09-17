import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-content',
  templateUrl: './navigation-content.component.html',
  styleUrls: ['./navigation-content.component.scss'],
})
export class NavigationContentComponent implements OnInit {
  @Input() showNav: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
