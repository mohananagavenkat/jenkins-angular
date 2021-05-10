import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, Input, OnChanges, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() tabInfo: any;
  @Input() active: boolean = false;
  @Input() componentTemplate: any;
  @ViewChild('tabComponentHolder' , { read: ViewContainerRef }) tabComponentHolder: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    // console.log('onchanges', this.active)
    // if(this.active && this.tabComponentHolder){
    //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.tabInfo.component);
    //   const componentRef = this.tabComponentHolder.createComponent(componentFactory);
    //   console.log(componentRef);
    // } else if(!this.active && this.tabComponentHolder){
    //   this.tabComponentHolder.clear();
    // }
  }

  ngAfterViewInit(){


  }

}
