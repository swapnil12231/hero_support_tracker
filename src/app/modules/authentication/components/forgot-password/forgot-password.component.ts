import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  isForgotPassword = true;
  constructor() { }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.isForgotPassword = false;
  }
}
