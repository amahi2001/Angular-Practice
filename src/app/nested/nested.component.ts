import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested',
  // templateUrl: './nested.component.html',
  template: `
    <p>This is nested inline html</p>
    <app-server></app-server>
  `,
  styleUrls: ['./nested.component.css'],
})
export class NestedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
