import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  /* 
  ! -defining an property called element => 
  !we will use this later to propety bind
  ! -the @Input() decorator allows to parent components to access 
  !this property (appComponent) 
  */
  @Input() element: {type: string, name:string, content:string}

  constructor() { }

  ngOnInit(): void {
  }

}
