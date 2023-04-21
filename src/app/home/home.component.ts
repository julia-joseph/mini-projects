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
    { name: 'Animated Navigation', path: 'animated-navigation' },
    { name: 'Incrementing Counter', path: 'incrementing-counter' },
    { name: 'Drink Water', path: 'drink-water' },
    { name: 'Movie App', path: 'movie-app' },
    { name: 'Background Slider', path: 'background-slider' },
    { name: 'Theme Clock', path: 'theme-clock' },
    { name: 'Rippling Button', path: 'rippling-button' },
    { name: 'Drag N Drop', path: 'drag-n-drop' },
    { name: 'Drawing Pad', path: 'drawing-pad' },
    { name: 'Kinetic Loader', path: 'kinetic-loader' },
    { name: 'Content Placeholder', path: 'content-placeholder' },
    { name: 'Sticky Navbar', path: 'sticky-navbar' },
    { name: 'Double Vertical Slider', path: 'double-vertical-slider' },
    { name: 'Toast Notifications', path: 'toast-notifications' },
    { name: 'Page Flip', path: 'page-flip' },
    { name: 'Double Tap Heart', path: 'double-tap' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
