import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-choice-picker',
  templateUrl: './random-choice-picker.component.html',
  styleUrls: ['./random-choice-picker.component.scss'],
})
export class RandomChoicePickerComponent implements OnInit {
  choices = [
    {
      text: '',
      selected: false,
    },
  ];
  choicelist = '';
  selectedStyle = {
    'background-color': 'white',
    color: 'rebeccapurple',
    transform: 'scale(0.98)',
  };

  constructor() {}

  ngOnInit(): void {}

  splitChoices() {
    return this.choicelist.split(',').filter((choice) => choice.trim() !== '');
  }

  onChange(event: any) {
    this.choicelist = event;
    this.choices = this.splitChoices().map((choice) => {
      return {
        text: choice,
        selected: false,
      };
    });
  }

  onEnter(event: any) {
    this.randomChoicePicker();
  }

  randomChoicePicker() {
    const randomChoices = 20;
    const intervalPeriod = 300;
    const randomSelectSetTimeoutPeriod = 100;

    const interval = setInterval(() => {
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * this.choices.length);
        this.selectChoice(randomIndex);
      }, randomSelectSetTimeoutPeriod);
    }, intervalPeriod);

    setTimeout(() => {
      clearInterval(interval);
      this.clearChoices();
    }, randomChoices * intervalPeriod);
  }

  selectChoice(index: number) {
    this.choices = this.splitChoices().map((choice, i) => {
      if (i === index) {
        return {
          text: choice,
          selected: true,
        };
      }

      return {
        text: choice,
        selected: false,
      };
    });
  }

  clearChoices() {
    setTimeout(() => {
      this.choicelist = '';
    }, 100);
  }
}
