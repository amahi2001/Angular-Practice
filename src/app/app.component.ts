import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //creating a server array where the first element is an object
  //!objects in JS take KV pairs like python dicts 
  serverElements = [{type: 'server', name: 'TestServer', content: 'just a test!'}];
}
