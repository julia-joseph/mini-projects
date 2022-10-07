import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-rippling-button',
  templateUrl: './rippling-button.component.html',
  styleUrls: ['./rippling-button.component.scss'],
})
export class RipplingButtonComponent implements OnInit, AfterViewInit {
  top: number = 0;
  left: number = 0;
  @ViewChild('button') button: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {}

  buttonClick() {
    // console.log(e);
    console.log(this.button);
    const offsetTop = this.button?.nativeElement.offsetTop;
    const offsetLeft = this.button?.nativeElement.offsetLeft;

    console.log(offsetTop, offsetLeft);
  }

  ngAfterViewInit(): void {
    console.log(this.button);
  }
}
