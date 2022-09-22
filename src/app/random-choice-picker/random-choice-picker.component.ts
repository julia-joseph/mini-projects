import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-choice-picker',
  templateUrl: './random-choice-picker.component.html',
  styleUrls: ['./random-choice-picker.component.scss'],
})
export class RandomChoicePickerComponent implements OnInit {
  choices = [''];
  choicelist = '';

  constructor() {}

  ngOnInit(): void {}

  onChange(event: any) {
    this.choicelist = event;
    this.choices = this.choicelist.split(',');
  }

  onEnter(event: any) {
    this.choicelist = '';
    // this.choices = [];
    console.log(event);
  }
}
