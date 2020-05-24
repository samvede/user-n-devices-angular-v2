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

  export class getUserUrlconstructor {
    Name: string;
    password: string;
    getUserUrl: string;
    constructor(Name: string, password: string){
      this.Name = name;
      this.password = password;
      this.getUserUrl = "users/{name}/?name=Name&passwd={password}";
    }
  }
  
  export class DevicePostData {
    // Device parameters
    deviceUser: string;
    deviceId  : number; 
    deviceName: string;
    deviceModelNumber: string;
  }
  