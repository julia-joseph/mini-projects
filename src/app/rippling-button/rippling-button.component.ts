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
  clicked: boolean = false;
  @ViewChild('button') button: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {}

  buttonClick(e: any) {
    const offsetTop = this.button?.nativeElement.offsetTop;
    const offsetLeft = this.button?.nativeElement.offsetLeft;

    const windowOffsetLeft = e.clientX;
    const windowOffsetTop = e.clientY;

    const diffLeft = windowOffsetLeft - offsetLeft;
    const diffTop = windowOffsetTop - offsetTop;

    this.top = diffTop;
    this.left = diffLeft;

    this.clicked = true;

    setTimeout(() => {
      this.clicked = false;
    }, 500);
  }

  ngAfterViewInit(): void {
    console.log(this.button);
  }
}
