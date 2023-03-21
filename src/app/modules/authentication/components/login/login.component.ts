import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/authentication/login';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: LoginModel;
  fieldTextType: boolean = false;
  rememberMe!: boolean;

  constructor(private loginService: LoginService, private router: Router, private authenticationService: AuthenticationService) {
    this.user = new LoginModel();
    this.rememberMe = !!localStorage.getItem('RememberMe');

    if (this.rememberMe)
      this.user.userName = localStorage.getItem('Username') || "";

  }
  ngOnInit(): void {
  }

  async login() {
    localStorage.removeItem('RememberMe');
    localStorage.removeItem('Username');
    if (this.rememberMe) {
      localStorage.setItem('RememberMe', JSON.stringify(this.rememberMe));
      localStorage.setItem('Username', this.user.userName);
    }
    this.loginService.login(this.user).then((res: any) => {
      this.authenticationService.LogonPortalSetCredentials(res.data.authtokens.accesstoken, res.data.authtokens.refreshtoken)
      this.router.navigate(['/']);
    });

  }

}
