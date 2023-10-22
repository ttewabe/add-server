import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'Testserver', content: 'Just a test', id: 0 },
  ];

  onServerAdded(blueprintData: ServerBlueprint) {
    this.serverElements.push({
      type: 'server',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
      id: blueprintData.serverId ?? 0,
    });
  }

  onBlueprintAdded(serverData: ServerBlueprint) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent,
      id: serverData.serverId ?? 0,
    });
  }
}

export interface ServerBlueprint {
  serverName: string;
  serverContent: string;
  serverId?: number;
}
