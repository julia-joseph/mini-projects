import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  projects = [
    { name: 'Expanding Cards', path: 'expanding-cards' },
    { name: 'Progress Steps', path: 'progress-steps' },
    { name: 'Rotating Navigation', path: 'rotating-navigation' },
    { name: 'Hidden Search', path: 'hidden-search' },
    { name: 'Blurry Loading', path: 'blurry-loading' },
    { name: 'Scrolling Animation', path: 'scrolling-animation' },
    { name: 'Split Landing Page', path: 'split-landing-page' },
    { name: 'Form Wave Animation', path: 'form-wave-animation' },
    { name: 'Sound Board', path: 'sound-board' },
    { name: 'Dad Jokes', path: 'dad-jokes' },
    { name: 'Event Keycodes', path: 'event-keycodes' },
    { name: 'FAQ Collapse', path: 'faq-collapse' },
    { name: 'Random Choice Picker', path: 'random-choice-picker' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
