import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getCurrent } from 'src/app/services/authentication/utils';
import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/models/authentication/login';
import { AppSettingsService } from 'src/app/services/authentication/appsettings.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private appSettingsService: AppSettingsService,
    private httpClient: HttpClient
  ) { }

  private getHttpHeaders() {
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('version', '1.0.0')
        .set('Authorization', 'Bearer ' + 'Test')
    };
    return options;
  }

  async login(loginModel: LoginModel) {
    let url = await this.appSettingsService.getApiUrl() + '/login';
    return await getCurrent(this.httpClient.post(url, loginModel, this.getHttpHeaders()));
  }

}
