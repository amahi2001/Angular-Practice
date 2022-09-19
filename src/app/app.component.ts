import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//this acts as args_to_template in the template
export class AppComponent {
  username: string = ''
  title = 'Angular-Practice';
  name = "I'm the app component"; // var is set with 2-way binding

  usernameIsEmpty(): boolean{
    return this.username.length < 1
  }

  resetUsername(){
    this.username = ""
  }
}
