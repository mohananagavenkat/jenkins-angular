import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { AddServerComponent } from '../add-server/add-server.component';
import { ServerListComponent } from '../server-list/server-list.component';
import { SignupComponent } from '../signup/signup.component';
import { UserListComponent } from '../users/user-list/user-list.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  lastValue;
  condition: boolean = true;
  tabs: any[];
  @ViewChild('componentHolder' , { read: ViewContainerRef }) componentHolder: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    // const ob = new Observable((observer) => {
    //   const timer = setInterval(() => {
    //     observer.next(Math.random());
    //   }, 500);
    //   setTimeout(() => {
    //     clearInterval(timer);
    //   }, 10000);
    // });
    // ob.subscribe({
    //   next: (val) => {
    //     this.lastValue = val;
    //   },
    // });

    // const ob = interval(100);

    // ob.subscribe({
    //   next: (val) => {
    //     this.lastValue = val;
    //   },
    // });

    this.tabs = [
      {
        title: 'Tab1',
        component: ServerListComponent
      },
      {
        title : 'Tab2',
        component: UserListComponent
      },
      {
        title : 'Tab3',
        component: SignupComponent
      }
    ];

  }

  onAddingTab(){
    this.tabs = [...this.tabs,{
      title: 'Tab4',
      component: AddServerComponent
    }]
  }

  onTabChange(tab){
    this.componentHolder.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(tab.tabInfo.component);
    const componentRef = this.componentHolder.createComponent(componentFactory);
  }

}
