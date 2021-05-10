import {
  AfterContentInit,
  AfterViewInit,
  ContentChild,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.show') show: boolean = false;
  @Input('dropDownText') text: string;
  isShown: boolean = false;
  constructor(private ele: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick(): void {
    // this.show = !this.show;
    this.isShown = !this.isShown;
    if (this.isShown)
      return this.renderer.addClass(this.ele.nativeElement, 'show');
    this.renderer.removeClass(this.ele.nativeElement, 'show');
  }
}
