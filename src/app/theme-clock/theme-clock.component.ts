import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-clock',
  templateUrl: './theme-clock.component.html',
  styleUrls: ['./theme-clock.component.scss'],
})
export class ThemeClockComponent implements OnInit, OnDestroy {
  hour: string = '';
  clockHour: string = '';
  minute: string = '';
  seconds: string = '';
  ampm: string = '';
  day: string = '';
  month: string = '';
  date: string = '';
  hourDeg: string = '';

  days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  isDarkMode: boolean = false;
  interval: any;

  constructor() {}

  ngOnInit(): void {
    this.setTime();
    this.interval = setInterval(() => {
      this.setTime();
    }, 1000);
  }

  setTime() {
    const fullDate = new Date();
    this.hour = fullDate.getHours() + '';
    this.clockHour = (+this.hour % 12) + '';
    const minutes = fullDate.getMinutes();
    this.minute = minutes < 10 ? '' + 0 + minutes : '' + minutes;
    const secs = fullDate.getSeconds();
    this.seconds = secs < 10 ? '' + 0 + secs : '' + secs;
    this.ampm = +this.hour >= 12 ? 'PM' : 'AM';
    this.day = this.days[fullDate.getDay()];
    this.month = this.months[fullDate.getMonth()];
    this.date = fullDate.getDate() + '';

    this.hourDeg = '' + this.scale(+this.hour, 0, 11, 0, 360);
  }

  toggleDarkLightMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  scale(
    value: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
  ) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
