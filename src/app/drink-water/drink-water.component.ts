import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-drink-water',
  templateUrl: './drink-water.component.html',
  styleUrls: ['./drink-water.component.scss'],
})
export class DrinkWaterComponent implements OnInit {
  remaining: number = 0;
  amount: number = 100;
  totalGlassHeight: number = 400;
  waterHeight: number = 0;
  airHeight: number = 400;
  refills = [
    { amount: 250, full: false },
    { amount: 250, full: false },
    { amount: 250, full: false },
    { amount: 250, full: false },
    { amount: 250, full: false },
    { amount: 250, full: false },
    { amount: 250, full: false },
    { amount: 250, full: false },
  ];

  constructor() {}

  ngOnInit(): void {
    this.setAmounts();
    this.onResize();
  }

  @HostListener('window:resize', ['$event']) onResize() {
    if (window.innerHeight < 580) {
      this.totalGlassHeight = 200;
    }
  }

  fill(i: number) {
    this.refills[i].full = !this.refills[i].full;
    this.setAmounts();
  }

  setAmounts() {
    const totalAmount = this.getTotalAmount();
    const percentFull = totalAmount / 2000;
    this.amount = (totalAmount / 2000) * 100;
    this.remaining = (2000 - totalAmount) / 1000;
    this.waterHeight = this.totalGlassHeight * percentFull;
    this.airHeight = this.totalGlassHeight - this.waterHeight;
  }

  getTotalAmount() {
    return this.refills.filter((refill) => refill.full).length * 250;
  }
}
