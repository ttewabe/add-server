import { ServerBlueprint } from './../app.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {} from 'stream';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<ServerBlueprint>();
  @Output() blueprintCreated = new EventEmitter<ServerBlueprint>();
  newServerName = '';
  newServerContent = '';
  newServerId = 0;

  constructor() {}

  ngOnInit() {}

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
      serverId: this.newServerId,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
      serverId: this.newServerId,
    });
  }
}
