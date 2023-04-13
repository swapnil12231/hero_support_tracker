

import { Injectable } from '@angular/core';

import { Constants } from 'src/app/models/constants';
import { HttpClientService } from 'src/app/services/authentication/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class SkillSetService {
  domainId: number;

  constructor(private httpClientService: HttpClientService) {
    this.domainId = parseInt(sessionStorage.getItem(Constants.domainId) || '0');
  }



  async getAllSkillSet() {

    this.domainId=1672730382222;
    let url = `/usermanagement/skills/?domainid=${this.domainId}`;
    return this.httpClientService.get(url);
  }



  async createSkillSet(data: any) {
    let url = `/usermanagement/skills/`;
    return this.httpClientService.post(url, data)
  }
}
