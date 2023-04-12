import { Injectable } from '@angular/core';
import { LoginModel, OtpModel } from 'src/app/models/authentication/login';
import { HttpClientService } from 'src/app/services/authentication/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClientService: HttpClientService
  ) { }

  
  async verifyUser(userEmail: any) {     
    let url = "/api/verifyuser?userNameWithDomain="+userEmail;
    return this.httpClientService.get(url);
  }

  async sendOtp(userEmail: any) {     
    let url = "/api/sendotp?userNameWithDomain="+userEmail;
    return this.httpClientService.post(url,userEmail);
  }

  async VerifyOTP(otpModel: OtpModel) {
    let url = '/api/verifyotp';
    return this.httpClientService.post(url, otpModel);
  } 


  async login(loginModel: LoginModel) {
    let url = '/api/login';
    return this.httpClientService.post(url, loginModel);
  }

  async verifyPassword(loginModel: LoginModel) {
    let url = '/api/verifypassword';
    return this.httpClientService.post(url, loginModel);
  }

}
