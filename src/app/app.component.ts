import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//this acts as args_to_template in the template
export class AppComponent {
  title = 'Angular-Practice';
  name = "";
}
