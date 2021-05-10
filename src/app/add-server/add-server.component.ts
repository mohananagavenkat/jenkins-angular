import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.scss'],
})
export class AddServerComponent implements OnInit {
  isAddButtonDisabled = true;
  newServerName = '';
  servers: string[] = [];
  @Output() addServer = new EventEmitter<string[]>();

  constructor() {}

  ngOnInit(): void {}

  handleAddServer($event, name): any {
    this.servers.push(name);
    this.addServer.emit(this.servers);
  }
}
