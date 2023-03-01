import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  isForgotPasswordForm = true;
  isResetForm = false;
  constructor() { }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.isForgotPasswordForm = false;
    this.isResetForm = true;
  }
}
