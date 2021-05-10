import { AfterContentInit, AfterViewInit, Component, EventEmitter, ContentChildren, OnInit, Output, QueryList, ViewChild, ViewContainerRef } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit, AfterViewInit {

  @Output() tabChange : EventEmitter<TabComponent> = new EventEmitter<TabComponent>();
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>

  @ViewChild('componentHolder') componentHolderTemplate;

  constructor() { }

  ngAfterContentInit(): void {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.onTabSelect(this.tabs.first);
  }

  onTabSelect(tab: TabComponent){
    this.tabs.toArray().forEach(tab => tab.active = false);
    tab.active = true;
    this.tabChange.emit(tab);
  }

  drop(event) {
    moveItemInArray(this.tabs.toArray(), event.previousIndex, event.currentIndex);
  }

}
