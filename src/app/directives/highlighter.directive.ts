import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
})
export class HighlighterDirective {
  @Input() bg = 'green';
  @Input() color = 'white';
  constructor(private ele: ElementRef) {
    this.ele.nativeElement.style.backgroundColor = this.bg;
    this.ele.nativeElement.style.color = this.color;
  }
}
