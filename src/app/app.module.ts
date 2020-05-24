import { BrowserModule } from '@angular/platform-browser';
// HttpClient module for RESTful API
import { HttpClientModule, HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { NgModule, Injectable } from '@angular/core';
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { userPostData } from './user-n-device-class'
import {DevicePostData} from './user-n-device-class'



@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
