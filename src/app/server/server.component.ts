import { Component } from "@angular/core";

@Component({
    //which html element to use
    selector : 'app-server',
    //which html file to use
    templateUrl : './server.component.html',
    styleUrls : ['./server.component.css']
})
export class ServerComponent {
    server_id : number = 12;
    server_status : string = 'offline';

    getServerStatus(){
        return this.server_status;
    }
}