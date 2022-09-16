import { Component } from "@angular/core";

@Component({
    //which html element to use
    selector : 'app-server',
    //which html file to use
    templateUrl : './server.component.html',
    styleUrls : ['./server.component.css']
})
export class ServerComponent {
    name = 'the server component';
}