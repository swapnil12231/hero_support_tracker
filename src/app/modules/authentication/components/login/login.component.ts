import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/authentication/login';
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
  fieldTextType: boolean = false;
  rememberMe!: boolean;
  navigationRoutes: any = navigationRoutes;
  constructor(private loginService: LoginService, private router: Router, private authenticationService: AuthenticationService) {

    this.user = new LoginModel();
    this.user.userName = "demo@contaque.com";
    this.user.password = "1234";
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
      this.authenticationService.LogonPortalSetCredentials(res.data);
      sessionStorage.setItem('domainId', res.data.domainid);
      sessionStorage.setItem('usergroupid', res.data.usergroupid);
      sessionStorage.setItem('id', res.data.id);
      this.router.navigate(['/']);
    });

  }

}
