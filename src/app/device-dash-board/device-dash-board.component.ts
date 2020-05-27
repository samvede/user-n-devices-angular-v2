import { Component, OnInit } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http'
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError, of } from 'rxjs'
import { retry, catchError } from 'rxjs/operators'
import { userPostData } from '../user-n-device-class'
import {DevicePostData} from '../user-n-device-class'
import { error } from 'protractor'
import {LoggedInUser} from '../user-n-device-class'
import { stringify } from 'querystring';

@Component({
  selector: 'app-device-dash-board',
  templateUrl: './device-dash-board.component.html',
  styleUrls: ['./device-dash-board.component.css']
})
export class DeviceDashBoardComponent implements OnInit {

  InputUserName: string;
  InputPassword: string;
  InputUserMobileNumber: number;
  InputUserId: number;

  InputDeviceName: string;
  InputDeviceId: number;
  InputDeviceModelNumber: string;
  InputDeviceUser:string;

  LoginSuccess: boolean;
  retdevuser: string;
  
  // Define API
  apiURL = 'http://rest-api-server.user-n-device-namespace.svc.cluster.local:8085';
  
 
 constructor(private http: HttpClient) { }
 // constructor(private UserData: userPostData) { }
 
//  constructor(private DeviceData: DevicePostData) {}
  
   Devices: DevicePostData[]; 
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

  getDevicesByUser(deviceUser:string) : Observable<DevicePostData[]> {
    // http://localhost:8085/devices/{user}/?user=testuser&size=50'
    console.log(deviceUser);
    let addStr = '/devices/{user}/?user='+deviceUser;
    let errval = 1;
    console.log('addStr2',addStr);
    this.http.get<DevicePostData[]>(this.apiURL + addStr) 
    .subscribe({
      next: data=> {this.Devices=data; console.log(this.Devices);},
      error: error => {this.handleError(error,"No Devices found!");
      this.InputDeviceUser=undefined;} 
    }
    );
    //return this.http.get<DevicePostData[]>(this.apiURL + addStr) 
    //.pipe(
    //  retry(1),
    //  catchError(this.handleError<DevicePostData[]>('getDevicesByUser', []))
    //)
    return of (this.Devices as DevicePostData[]);
}  
 // // Error handling 
 // private handleError<T>(operation = 'operation', result?: T) {
//    return (error: any): Observable<T> => {
//  
      // TODO: send the error to remote logging infrastructure
 //     console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
//      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
//      return of (result as T);
 //   };
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
