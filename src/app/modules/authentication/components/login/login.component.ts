import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  fieldTextType: boolean = false;
  rememberMe!: boolean;

  constructor() {
    this.user = new User();
    this.rememberMe = !!localStorage.getItem('RememberMe');

    if (this.rememberMe)
      this.user.username = localStorage.getItem('Username') || "";

  }
  ngOnInit(): void {
  }

  async login() {
    localStorage.removeItem('RememberMe');
    localStorage.removeItem('Username');
    if (this.rememberMe) {
      localStorage.setItem('RememberMe', JSON.stringify(this.rememberMe));
      localStorage.setItem('Username', this.user.username);
    }
 
  }

}
export class User {
  public username!: string;
  public password!: string;
}