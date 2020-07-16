import { Component, OnInit } from '@angular/core';
import { CometChat } from '@cometchat-pro/chat';
import { COMETCHAT_CONSTANTS } from '../CONSTS';
import{Router}from'@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showUi: boolean = false;
  showloader = false;
  userId;
  constructor(public router:Router) { }

  ngOnInit() {
  }
  login() {
    this.showloader = true;
    CometChat.login(this.userId, COMETCHAT_CONSTANTS.API_KEY).then((user) => {
      alert('sucess');
      this.router.navigate(['/menu']);
    }, error => {
     alert(error);
      this.showloader = false;
    });
  }
}
