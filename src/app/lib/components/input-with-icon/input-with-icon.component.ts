import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { InputIconDirective } from '../../directives/input-icon.directive';

@Component({
  selector: 'app-input-with-icon',
  templateUrl: './input-with-icon.component.html',
  styleUrls: ['./input-with-icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputWithIconComponent implements OnInit, AfterContentInit {

  @ContentChild(InputIconDirective, { read: ViewContainerRef }) input: ViewContainerRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(){
    console.log(this.input);
  }

}
