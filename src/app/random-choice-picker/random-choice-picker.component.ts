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
    if (event.inputType === 'insertLineBreak') return;

    this.choicelist += event.data ? event.data : '';
    this.choices = this.choicelist.split(',');
    console.log(this.choicelist);
    console.log(event.data);
    console.log(event);
  }

  onEnter(event: any) {
    console.log(event);
  }
}
