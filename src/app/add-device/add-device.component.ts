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
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  InputUserName: string;
  InputPassword: string;
  InputUserMobileNumber: number;
  InputUserId: number;

  InputDeviceName: string;
  InputDeviceId: number;
  InputDeviceModelNumber: string;
  InputDeviceUser:string;

  
  
  // Define API
  apiURL = 'http://104.198.186.33:30001';
  
 
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
    next: data=> console.log ("got user"),
    error: error => {this.handleError(error,"UserName or password is incorrect");
                     this.InputUserName=undefined; 
                     this.InputPassword=undefined;}}
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
  addDevice() {
    var DeviceData = new DevicePostData(this.InputDeviceId, this.InputDeviceName, this.InputDeviceModelNumber, this.InputDeviceUser);          
          
    console.log("santoshd");
    this.http.post(this.apiURL + '/devices',DeviceData, this.httpOptions)
    .subscribe({
      next: data=> console.log (DeviceData),
      error: error => {this.handleError(error,"Server error");console.log(error);
      this.InputDeviceId=undefined;this.InputDeviceName=undefined;this.InputDeviceModelNumber=undefined;this.InputDeviceUser=undefined;} 
    }
    )
  }  

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
