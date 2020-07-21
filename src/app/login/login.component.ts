import { Component, OnInit } from '@angular/core';
import { CometChat } from '@cometchat-pro/chat';
import { COMETCHAT_CONSTANTS } from '../CONSTS';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showUi: boolean = false;
  userId;
  constructor(private spinner: NgxSpinnerService,public router: Router) { }

  ngOnInit() {
  }
  login() {
    this.spinner.show();
    CometChat.login(this.userId, COMETCHAT_CONSTANTS.API_KEY).then((user) => {
      localStorage.setItem('user', JSON.stringify(user));
      this.spinner.hide();

      this.router.navigate(['/embeded-app']);
    }, error => {
      alert(error);
    });
  }
}
