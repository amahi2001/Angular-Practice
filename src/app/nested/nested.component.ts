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
  allowNewServer: boolean = false;

  constructor() {
    //disabling the button after 2 seconds
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}
}
