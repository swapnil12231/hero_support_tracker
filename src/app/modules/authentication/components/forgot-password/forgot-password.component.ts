import { Component, OnInit } from '@angular/core';
import { ForgotPasswordModel } from 'src/app/models/authentication/login';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgetPasswordModel: ForgotPasswordModel;
  emailPattern = "^[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,30}[.]{1}[a-z]{3}$";
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
