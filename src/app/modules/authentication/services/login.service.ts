import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/models/authentication/login';
import { HttpClientService } from 'src/app/services/authentication/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClientService: HttpClientService
  ) { }


  async login(loginModel: LoginModel) {
    let url = '/api/login';
    return this.httpClientService.post(url, loginModel);
  }

}
