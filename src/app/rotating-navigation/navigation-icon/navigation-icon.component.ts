import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-icon',
  templateUrl: './navigation-icon.component.html',
  styleUrls: ['./navigation-icon.component.scss'],
})
export class NavigationIconComponent implements OnInit {
  @Input() showNav: boolean = false;
  @Output() showNavigation = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  openNavigation() {
    this.showNavigation.emit(true);
  }

  closeNavigation() {
    this.showNavigation.emit(false);
  }
}
