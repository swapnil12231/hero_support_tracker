import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/models/authentication/login';
import { AppSettingsService } from 'src/app/services/authentication/appsettings.service';
import { HttpClientService } from 'src/app/services/authentication/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private appSettingsService: AppSettingsService,
    private httpClientService: HttpClientService
  ) { }


  async login(loginModel: LoginModel) {
    let url = '/api/login';
    return this.httpClientService.post(url, loginModel);
  }

}
