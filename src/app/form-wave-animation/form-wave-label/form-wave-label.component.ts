import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-wave-label',
  templateUrl: './form-wave-label.component.html',
  styleUrls: ['./form-wave-label.component.scss'],
})
export class FormWaveLabelComponent implements OnInit {
  @Input() label: string = '';
  constructor() {}

  ngOnInit(): void {}
}
