import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appShowMore]',
})
export class ShowMoreDirective implements OnInit, AfterViewInit {
  contentBlock: HTMLElement;
  height: number;
  constructor(private ele: ElementRef, private renderer: Renderer2) {}
  @Input() lines = 5;
  @Input() showMoreText = 'Show More';
  @Input() showLessText = 'Show Less ';

  ngOnInit() {
    console.log(this.ele);
  }

  ngAfterViewInit() {
    this.contentBlock = this.ele.nativeElement.querySelector(
      '.card-description'
    );

    const styles = getComputedStyle(this.contentBlock);

    this.height =
      this.lines * parseInt(styles.lineHeight) + parseInt(styles.paddingTop);

    if (parseInt(styles.height) - parseInt(styles.paddingTop) <= this.height) {
      return;
    }
    console.log(styles.height, this.height);

    this.contentBlock.style.height = this.height + 'px';
    this.contentBlock.style.overflow = 'hidden';
    this.contentBlock.style.transition = 'all 1s linear';

    this.renderer.appendChild(this.ele.nativeElement, this.getShowMoreButton());
  }

  getShowMoreButton() {
    const showMoreBtn = this.renderer.createElement('button');
    const showMoreBtntext = this.renderer.createText(this.showMoreText);
    const showLessBtntext = this.renderer.createText(this.showLessText);
    this.renderer.appendChild(showMoreBtn, showMoreBtntext);
    this.renderer.addClass(showMoreBtn, 'read-more-btn');
    this.renderer.listen(showMoreBtn, 'click', (e: MouseEvent) => {
      console.log(e);
      if ((e.target as HTMLElement).textContent === this.showMoreText) {
        this.contentBlock.style.height = 'auto';
        this.contentBlock.style.overflow = 'hidden';
        this.renderer.removeChild(showMoreBtn, showMoreBtntext);
        this.renderer.appendChild(showMoreBtn, showLessBtntext);
      } else {
        this.contentBlock.style.height = this.height + 'px';
        this.contentBlock.style.overflow = 'show';
        this.renderer.removeChild(showMoreBtn, showLessBtntext);
        this.renderer.appendChild(showMoreBtn, showMoreBtntext);
      }
    });
    return showMoreBtn;
  }
}
