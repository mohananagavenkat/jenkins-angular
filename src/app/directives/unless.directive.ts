import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective implements OnChanges {
  @Input() appUnless: boolean;
  @HostBinding('style.background') bg: string;

  constructor(private tr: TemplateRef<any>, private vc: ViewContainerRef) {}

  @HostListener('click') handleClick(e) {
    console.log(e);
    alert('clicked');
  }

  ngOnChanges() {
    if (this.appUnless) {
      this.vc.createEmbeddedView(this.tr);
      this.bg = 'green';
    } else {
      this.vc.clear();
    }
  }
}
