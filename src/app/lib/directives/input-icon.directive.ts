import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[iconInput]',
})
export class InputIconDirective {
  constructor(private ele: ElementRef, private renderer: Renderer2) {
    console.log(this.ele, 'from the InputIconDirective');
  }

  @HostBinding('className') className: string = this.ele.nativeElement.className;

  @HostListener('blur')
  onBlur() {
    this.className += ' blur';
  }

  @HostListener('focus')
  onFocus() {
    this.className += ' focus';
  }
}
