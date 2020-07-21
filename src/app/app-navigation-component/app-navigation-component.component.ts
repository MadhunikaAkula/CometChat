import { Component, OnInit } from '@angular/core';
import { CometChat } from '@cometchat-pro/chat';
import{Router, RoutesRecognized}from'@angular/router';
@Component({
  selector: 'app-navigation-component',
  templateUrl: './app-navigation-component.component.html',
  styleUrls: ['./app-navigation-component.component.scss']
})
export class AppNavigationComponentComponent implements OnInit {
  public LoggedUser:any;

  constructor(private router:Router) { }

  ngOnInit() {
    this.LoggedUser= JSON.parse(localStorage.getItem('user'));

  }
  logOut(){
    // localStorage.removeItem("user");
    localStorage.clear();
      this.router.navigate(['/']);
      // window.location.reload();
   }
}
