import {Component} from '@angular/core';


@Component({
    selector:'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
     serverId:number=487 ;
     serverStatus: string = 'off';

}