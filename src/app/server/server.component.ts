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


    constructor(){
        this.server_status = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.server_status;
    }

    getColor(){
        return this.server_status==='online' ? 'green' : 'red'
    }
}