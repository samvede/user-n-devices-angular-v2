export class userPostData{
    mobileNumber: number;
    passWord: string;
    userId: number;
    userName: string;
    constructor(mobileNumber: number, passWord: string, userId: number, userName: string){
      this.mobileNumber = mobileNumber;
      this.passWord = passWord;
      this.userId = userId;
      this.userName = userName;
    }
    
  }

  export class LoggedInUser {
    userName: string;
    loginStatus: boolean;
    constructor(userName: string, status:boolean){
        this.userName = userName;
        this.loginStatus = status;
    }      
    
  }
  export var userLoggedIn: string;
  
  export class DevicePostData {
    // Device parameters
    deviceUser: string;
    deviceId  : number; 
    deviceName: string;
    deviceModelNumber: string;

    constructor(deviceId: number, deviceName: string, deviceModelNumber: string, userName: string){
      this.deviceUser = userName;
      this.deviceId = deviceId;
      this.deviceModelNumber = deviceModelNumber;
      this.deviceName = deviceName;
    }
  }
  