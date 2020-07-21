import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerService } from "ngx-spinner";

import { AppNavigationComponentComponent } from './app-navigation-component/app-navigation-component.component';
import { DemoComponent } from './demo/demo.component';
import { LoaderComponent } from './loader/loader.component';
import { CometchatAngularUiKitModule } from 'src/libs/cometchat-angular-ui-kit/src/lib/cometchat-angular-ui-kit.module';
import { LoginComponent } from './login/login.component';
// import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,  AppNavigationComponentComponent, DemoComponent, LoaderComponent, LoginComponent, 
  ],
  imports: [NgxSpinnerModule,
    BrowserModule, CommonModule, FormsModule, CometchatAngularUiKitModule, AppRoutingModule
  ],
  providers: [NgxSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
