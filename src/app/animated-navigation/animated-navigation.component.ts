import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animated-navigation',
  templateUrl: './animated-navigation.component.html',
  styleUrls: ['./animated-navigation.component.scss'],
})
export class AnimatedNavigationComponent implements OnInit {
  showMenu: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
