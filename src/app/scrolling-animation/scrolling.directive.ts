import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrolling]',
})
export class ScrollingDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.renderer.listen('window', 'load', () => {
      this.loadBox();
    });

    this.renderer.listen('window', 'scroll', () => {
      this.loadBox();
    });
  }

  loadBox() {
    const boxTop = this.elRef.nativeElement.getBoundingClientRect().top;
    const trigger = (window.innerHeight / 5) * 4;

    if (boxTop < trigger) {
      this.addClass('show', this.elRef.nativeElement);
    } else {
      this.removeClass('show', this.elRef.nativeElement);
    }
  }

  addClass(className: string, element: any) {
    this.renderer.addClass(element, className);
  }

  removeClass(className: string, element: any) {
    this.renderer.removeClass(element, className);
  }
}
