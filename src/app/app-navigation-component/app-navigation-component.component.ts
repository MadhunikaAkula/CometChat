import { Component, OnInit } from '@angular/core';
import { CometChat } from '@cometchat-pro/chat';

@Component({
  selector: 'app-navigation-component',
  templateUrl: './app-navigation-component.component.html',
  styleUrls: ['./app-navigation-component.component.scss']
})
export class AppNavigationComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }

  logout = () => {
    CometChat.logout().then(() => {
      location.href = '/';
    });
  }

}
