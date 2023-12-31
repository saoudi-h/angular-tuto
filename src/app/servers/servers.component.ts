import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!';
  activateBtn:string = "Activer";
  serverName:string = "";
  hideSection:boolean = true;
  servers:string[] = ['server1','server2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }
  onUpdateServerName(event:Event){
      this.serverName = (<HTMLInputElement>event.target).value;
  }
  toggleActiveBtn() {
    this.allowNewServer=!this.allowNewServer;
    this.activateBtn = this.allowNewServer ?'Activer' : 'Desactiver';
  }
  addServer(event:Event){
    const text = <HTMLInputElement>document.querySelector("#newServerInput");
    this.servers.push((text.value));
    text.value = "";
  }

  onHideShowSection(){
    this.hideSection = !this.hideSection;
  }
}
