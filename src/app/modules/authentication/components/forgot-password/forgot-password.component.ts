import { Component, OnInit } from '@angular/core';
import { ForgotPasswordModel } from 'src/app/models/authentication/login';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgetPasswordModel : ForgotPasswordModel;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  isAddNewPassword: boolean = false;
  isForgotPassword: boolean = true;
  constructor() { 
    this.forgetPasswordModel = new ForgotPasswordModel();
  }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.isForgotPassword = false;
    // this.isAddNewPassword = true;
  }
}
