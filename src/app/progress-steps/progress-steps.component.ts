import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-steps',
  templateUrl: './progress-steps.component.html',
  styleUrls: ['./progress-steps.component.scss'],
})
export class ProgressStepsComponent implements OnInit {
  steps = [
    { name: '1', isActive: true },
    { name: '2', isActive: false },
    { name: '3', isActive: false },
    { name: '4', isActive: false },
  ];
  progressWidth = '0%';
  activeStep = 0;

  constructor() {}

  ngOnInit(): void {}

  isPrevDisabled() {
    return !(this.steps[1].isActive === true);
  }

  isNextDisabled() {
    return this.steps[this.steps.length - 1].isActive === true;
  }

  goToPreviousStep() {
    if (this.activeStep !== undefined && this.activeStep >= 0) {
      this.activeStep = this.activeStep - 1;
      this.updateProgressBar();
      this.steps[this.activeStep + 1].isActive = false;
    }
  }

  goToNextStep() {
    if (
      this.activeStep !== undefined &&
      this.activeStep + 1 < this.steps.length
    ) {
      this.activeStep = this.activeStep + 1;
      this.updateProgressBar();
      this.steps[this.activeStep].isActive = true;
    }
  }

  updateProgressBar() {
    this.progressWidth =
      (this.activeStep / (this.steps.length - 1)) * 100 + '%';
  }
}
