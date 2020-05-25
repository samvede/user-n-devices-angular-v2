import { NgModule, Injectable } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import {SignUpComponent} from './sign-up/sign-up.component'
import {LoginComponent} from './login/login.component'
import { AddDeviceComponent } from './add-device/add-device.component';
import { DeviceDashBoardComponent } from './device-dash-board/device-dash-board.component';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' }, 
  { path: 'Login', component: LoginComponent },
  { path: 'Sign up', component: SignUpComponent},
  { path: 'Device Management', component: AddDeviceComponent},
  { path: 'Device Dashboard', component: DeviceDashBoardComponent},
  
];

@NgModule({
  declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
