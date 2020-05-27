import { Component, OnInit } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http'
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { retry, catchError } from 'rxjs/operators'
import { userPostData } from '../user-n-device-class'
import {DevicePostData} from '../user-n-device-class'
import { error } from 'protractor'
import {LoggedInUser} from '../user-n-device-class'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  InputUserName: string;
  InputPassword: string;
  InputUserMobileNumber: number;
  InputUserId: number;

  InputDeviceName: string;
  InputDeviceId: number;
  InputDeviceModelNumber: string;
  InputDeviceUser:string;

  LoginSuccess: boolean;
  loginUSER: string; 
  
  
  // Define API
  apiURL = 'http://rest-api-server.user-n-device-namespace.svc.cluster.local:8085';
  
 
 constructor(private http: HttpClient) { }
 // constructor(private UserData: userPostData) { }
 
//  constructor(private DeviceData: DevicePostData) {}
  
   
  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }) 
  }  
  
  httpDeleteOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }),
    body: {}  
  } 
  // HttpClient API get() method => get user by name
  getUserByName(userName: string, passWord: string)  {
    // construct the url string with input params

   let addStr = '/users/{name}/?name='+userName+'&passwd='+passWord;
   console.log('addStr2',addStr);
   this.http.get(this.apiURL + addStr) 
   .subscribe({
    next: data=> { this.loginUSER=userName; console.log (this.loginUSER);this.LoginSuccess = true;},
    error: error => {this.handleError(error,"UserName or password is incorrect");
                     this.InputUserName=undefined; 
                     this.InputPassword=undefined;
                     this.LoginSuccess = false; 
                     this.loginUSER=null; }
                    }
   )
    //.pipe(
     // retry(1),
      //catchError(this.handleError)
    //)
  }
  
 
  // HttpClient API get() method => Fetch User by ID
//  getUserByID(UserId: number) {
//     return this.http.get(this.apiURL + '/users/' + UserId)
//    .pipe(
//      retry(1),
//      catchError(this.handleError)
//    )
//  }  

  //getDeviceByName(deviceName:string,deviceUser:string) {
  //  let params2 = new HttpParams();
  //  params2.append("name",deviceName);
    //params2.append("size",JSON.stringify(50));
  //  params2.append("DeviceUser", deviceUser);
  //    return this.http.get(this.apiURL + '/devices/{name}/?',{params: params2})
  //   .pipe(
  //     retry(1), 
  //     catchError(this.handleError)
  //   )
   //}  
  // HttpClient API post() method => Add new user
  addUser()  {
      var UserData = new userPostData(this.InputUserMobileNumber, this.InputPassword, 0, this.InputUserName);          
          
    console.log("santoshd");
    this.http.post(this.apiURL + '/users',UserData, this.httpOptions)
    .subscribe({
      next: data=> console.log (UserData.userName),
      error: error => console.log('There was an error!', error)}
    )
     
  }  
   
  // HttpClient API put() method => Add new device
  //addDevice() {
   // this.DeviceData.deviceId = 0;
   // this.DeviceData.deviceModelNumber = this.InputDeviceModelNumber;
   // this.DeviceData.deviceUser = this.InputDeviceUser;
   // this.DeviceData.deviceName = this.InputDeviceName;

   // return this.http.post(this.apiURL + '/devices',this.DeviceData, this.httpOptions)
   //   .pipe(
   //     retry(1),
   //     catchError(this.handleError)
   //   )
   // }  

  // HttpClient API delete() method => Remove Device
  //removeDevice(UserName: string, deviceId: number, deviceName: string, deviceModelNumber: string) {
     
  //  this.httpDeleteOptions.body =  {
  //     "deviceUser": UserName,
  //     "deviceId": deviceId,
  //     "deviceName": deviceName,
  //     "deviceModelNumber": deviceModelNumber 
  //  }
         
  //  console.log(this.DeviceData);
  //  console.log(this.httpDeleteOptions);
  //  return this.http.delete(this.apiURL + '/devices',this.httpDeleteOptions)
  //  .pipe(
  //    retry(1),
  //    catchError(this.handleError)
  //  )
    
 // }

  // Error handling 
handleError(error, errMsg: string) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${errMsg}`;
     }
     console.log(errorMessage);
     window.alert(errorMessage);
     return throwError(errorMessage);
} 

  ngOnInit(): void {
  }

}

