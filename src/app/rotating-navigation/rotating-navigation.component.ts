import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotating-navigation',
  templateUrl: './rotating-navigation.component.html',
  styleUrls: ['./rotating-navigation.component.scss'],
})
export class RotatingNavigationComponent implements OnInit {
  showNav: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
