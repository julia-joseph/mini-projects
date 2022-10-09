import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-drawing-pad',
  templateUrl: './drawing-pad.component.html',
  styleUrls: ['./drawing-pad.component.scss'],
})
export class DrawingPadComponent implements OnInit {
  color: any = '#000000';
  size: number = 5;
  @ViewChild('canvas') canvas: ElementRef | undefined;
  context: CanvasRenderingContext2D | undefined;
  x: number | undefined;
  y: number | undefined;
  isPressed = false;
  height = 800;
  width = 800;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.context = this.canvas?.nativeElement.getContext('2d');
  }

  @HostListener('window:resize', ['$event']) onResize() {
    if (window.innerHeight < 900 || window.innerWidth < 900) {
      this.height = 500;
      this.width = 500;
    } else if (window.innerHeight < 500 || window.innerWidth < 500) {
      this.height = 300;
      this.width = 300;
    } else if (window.innerHeight < 320 || window.innerWidth < 320) {
      this.height = 200;
      this.width = 200;
    } else {
      this.height = 800;
      this.width = 800;
    }

    console.log('resize', this.height, this.width);
  }

  drawCircle(x: number, y: number) {
    if (!this.context) {
      return;
    }

    this.context.beginPath();
    this.context.arc(x, y, this.size, 0, Math.PI * 2);
    this.context.fillStyle = this.color;
    this.context.fill();
  }

  drawLine(
    x1: number | undefined,
    y1: number | undefined,
    x2: number,
    y2: number
  ) {
    if (!this.context || !x1 || !y1) {
      return;
    }

    this.context.beginPath();
    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.strokeStyle = this.color;
    this.context.lineWidth = this.size * 2;
    this.context.stroke();
  }

  onTouchMove(e: TouchEvent) {
    console.log('onTouchMove', e);
    this.isPressed = true;
    const x2 = e.targetTouches[0].pageX;
    const y2 = e.targetTouches[0].pageY;

    this.drawCircle(x2, y2);
    this.drawLine(this.x, this.y, x2, y2);
  }

  onTouchEnd(e: TouchEvent) {
    console.log('onTouchEnd', e);
    this.isPressed = false;
  }

  onMouseDown(e: MouseEvent) {
    console.log('onMouseDown', e);
    this.isPressed = true;
  }

  onMouseUp(e: MouseEvent) {
    console.log('onMouseUp', e);
    this.isPressed = false;
    const x = undefined;
    const y = undefined;
  }

  onMouseMove(e: MouseEvent) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    if (this.isPressed) {
      console.log('onMouseMove Pressed', e);

      this.drawCircle(x2, y2);
      this.drawLine(this.x, this.y, x2, y2);

      this.x = x2;
      this.y = y2;
    } else {
      this.x = undefined;
      this.y = undefined;
    }
  }

  changeColor(e: any) {
    this.color = e.target.value;
  }

  resetPad() {
    this.size = 5;
    this.color = '#000000';
    this.context?.clearRect(
      0,
      0,
      this.canvas?.nativeElement.width,
      this.canvas?.nativeElement.height
    );
  }
}
