import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss'],
})
export class ServerListComponent implements OnInit {
  serverList: any[];

  constructor() {}

  ngOnInit(): void {}

  onNewServer(servers: string[]): any {
    this.serverList = servers;
  }
}
