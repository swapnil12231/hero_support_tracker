import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel, OtpModel } from 'src/app/models/authentication/login';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { LoginService } from '../../services/login.service';
import { navigationRoutes } from 'src/app/constants/navigation-routes.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: LoginModel;
  otpModel!: OtpModel;
  fieldTextType: boolean = false;
  rememberMe!: boolean;
  navigationRoutes: any = navigationRoutes;
  verifyUser!:boolean;
  isTwoFactor!:boolean;
  isGenerateOtp!:boolean;
  OTPVerified!:boolean;
  emailOTP!:string;  
  constructor(private loginService: LoginService, private router: Router, private authenticationService: AuthenticationService) {

    this.user = new LoginModel();
    this.otpModel = new OtpModel();
    this.user.userName = "demo@contaque.com";
    this.user.password = "1234";
    this.rememberMe = !!localStorage.getItem('RememberMe');
    if (this.rememberMe)
      this.user.userName = localStorage.getItem('Username') || "";

  }
  ngOnInit(): void {
  }

  async verifyUserEmail() {   
    this.loginService.verifyUser(this.user.userName).then((res:any)=>{
      if(res.two_factor_authentication==true) {
        this.verifyUser =  true;
        this.isTwoFactor = true;
      } else {
        this.verifyUser =  false;
        this.isTwoFactor = false;
      }

    })
  }

  async verifyPassword() {
    this.loginService.verifyPassword(this.user).then((res:any)=>{
      if(res.two_factor_authentication==true && res.sessionid!="") {  
        this.otpModel.userName = this.user.userName;
        this.otpModel.sessionid = res.sessionid;     
       this.OTPVerified = true;
       this.verifyUser = false;      
      } 

    })
  }

  async verifyOTP() {
    this.otpModel.otp =this.emailOTP;
    this.loginService.VerifyOTP(this.otpModel).then((res:any)=>{
      if(res) {
        this.authenticationService.LogonPortalSetCredentials(res);
      sessionStorage.setItem('domainId', res.domainid);
      sessionStorage.setItem('usergroupid', res.usergroupid);
      sessionStorage.setItem('id', res.id);
      this.router.navigate(['/']);
      }

    })
  }


  async login() {
    localStorage.removeItem('RememberMe');
    localStorage.removeItem('Username');
    if (this.rememberMe) {
      localStorage.setItem('RememberMe', JSON.stringify(this.rememberMe));
      localStorage.setItem('Username', this.user.userName);
    }
    this.loginService.login(this.user).then((res: any) => {
      this.authenticationService.LogonPortalSetCredentials(res.data);
      sessionStorage.setItem('domainId', res.data.domainid);
      sessionStorage.setItem('usergroupid', res.data.usergroupid);
      sessionStorage.setItem('id', res.data.id);
      this.router.navigate(['/']);
    });

  }

}
