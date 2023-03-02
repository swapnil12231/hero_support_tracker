import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user!: User;
  fieldTextType: boolean = false;
  repeatFieldTextType: boolean = false;
  show_button: Boolean = false;
  show_eye: Boolean = false;
  submitted!: boolean;
  constructor() {
    this.user = new User();
    
  }
  ngOnInit(): void {
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }

  async login() {
    console.log(this.user);
    
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');

  }

}
export class User {
  public username!: string;
  public password!: string;
}