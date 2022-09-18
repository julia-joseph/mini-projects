import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appLandingHover]',
})
export class LandingHoverDirective {
  @Input() appLandingHover: string = '';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.addClass(this.appLandingHover, this.elRef.nativeElement.parentNode);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeClass(this.appLandingHover, this.elRef.nativeElement.parentNode);
  }

  addClass(className: string, element: any) {
    this.renderer.addClass(element, className);
  }

  removeClass(className: string, element: any) {
    this.renderer.removeClass(element, className);
  }
}
