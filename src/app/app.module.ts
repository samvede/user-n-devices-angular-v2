import { BrowserModule } from '@angular/platform-browser';
// HttpClient module for RESTful API
import { HttpClientModule, HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { NgModule, Injectable } from '@angular/core';
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { userPostData } from './user-n-device-class'
import {DevicePostData} from './user-n-device-class';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { DeviceDashBoardComponent } from './device-dash-board/device-dash-board.component'



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    AddDeviceComponent,
    DeviceDashBoardComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
