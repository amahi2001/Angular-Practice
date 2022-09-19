import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-nested', //by element
  // selector: '[app-nested]', //by attribute
  selector: '.app-nested', //by class

  templateUrl: './nested.component.html',
  // template: `
  //   <h3>This component contains a nested component</h3>
  //   <app-server></app-server>
  // `,
  styleUrls: ['./nested.component.css'],
})
export class NestedComponent implements OnInit {
  serverName = '';
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';

  //!for directives
  server_created: boolean = false;

  constructor() {
    //disabling the button after 2 seconds
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
  }

  //function for event binding
  onCreateServer() {
    this.server_created = true;
    this.serverCreationStatus = 'Server was created!: ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    // console.log(event);
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  ngOnInit(): void {}
}
