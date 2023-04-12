import { Injectable } from '@angular/core';
import { Constants } from 'src/app/models/constants';
import { HttpClientService } from 'src/app/services/authentication/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class UserGroupsService {
  domainId: number;
  constructor(private httpClientService: HttpClientService) {
    this.domainId = parseInt(sessionStorage.getItem(Constants.domainId) || '0');
  }


  async getAllUserGroups() {
    let url = `/usermanagement/usergroup/?domainid=${this.domainId}`;
    return this.httpClientService.get(url);
  }


  async getUserGroupEntity() {
    let url = `/usermanagement/usergroup/get-entity?domainid=${this.domainId}`;
    return this.httpClientService.get(url);
  }


  async createUserGroup(data: any) {
    let url = `/usermanagement/usergroup/`;
    return this.httpClientService.post(url, data)
  }
}
