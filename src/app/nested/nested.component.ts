import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-nested]',
  templateUrl: './nested.component.html',
  // template: `
  //   <h3>This component contains a nested component</h3>
  //   <app-server></app-server>
  // `,
  styleUrls: ['./nested.component.css'],
})
export class NestedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
