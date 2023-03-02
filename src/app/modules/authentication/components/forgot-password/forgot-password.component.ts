import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  isAddNewPassword: boolean = false;
  isForgotPassword: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.isForgotPassword = false;
    // this.isAddNewPassword = true;
  }
}
