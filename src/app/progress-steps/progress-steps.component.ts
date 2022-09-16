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

  constructor() {}

  ngOnInit(): void {}

  isPrevDisabled() {
    return !(this.steps[1].isActive === true);
  }

  isNextDisabled() {
    return this.steps[this.steps.length - 1].isActive === true;
  }

  findLastStepIndex() {
    const index = this.steps.findIndex((step) => !step.isActive);
    return index !== -1 ? index - 1 : this.steps.length - 1;
  }

  goToPreviousStep() {
    const stepIndex = this.findLastStepIndex();

    if (stepIndex !== undefined && stepIndex >= 0) {
      this.updateProgressBar(stepIndex - 1);
      this.steps[stepIndex].isActive = false;
    }
  }

  goToNextStep() {
    const stepIndex = this.findLastStepIndex();

    if (stepIndex !== undefined && stepIndex + 1 < this.steps.length) {
      this.updateProgressBar(stepIndex + 1);
      this.steps[stepIndex + 1].isActive = true;
    }
  }

  updateProgressBar(activeIndex: number) {
    this.progressWidth = (activeIndex / (this.steps.length - 1)) * 100 + '%';
  }
}
