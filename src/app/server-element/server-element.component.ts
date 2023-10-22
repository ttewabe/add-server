import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string, id:number}={ type: '', name: '', content: '', id:0 };

  constructor() {}

  ngOnInit(): void {}
}
//@Input to combine/bind property out side the component(srvElement)
