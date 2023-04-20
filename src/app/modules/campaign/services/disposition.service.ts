import { Injectable } from '@angular/core';
import { Constants } from 'src/app/models/constants';
import { HttpClientService } from 'src/app/services/authentication/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class DispositionService {
  domainId: number;
  userGroupId: number;
  userId: number;
  constructor(private httpClientService: HttpClientService) {
    this.domainId = parseInt(sessionStorage.getItem(Constants.domainId) || '0');
    this.userGroupId = parseInt(sessionStorage.getItem(Constants.userGroupId) || '0');
    this.userId = parseInt(sessionStorage.getItem(Constants.userId) || '0');

  }

  async getEntityToAddDispotision() {
    let url = `/campaign/disposition/get-entity?domainId=${this.domainId}&userGroupId=${this.userGroupId}`;
    return this.httpClientService.get(url)
  }

  async getAllCampaignDispositionData() {
    let url = `/campaign/disposition/?domainId=${this.domainId}&userId=${this.userId}&userGroupId=${this.userGroupId}`;
    return this.httpClientService.get(url);
  }

  async addDisposition(data: any) {
    let url = `/campaign/disposition/`;
    return this.httpClientService.post(url, data);
  }

  async editDisposition(data: any) {
    let url = `/campaign/disposition/`;
    return this.httpClientService.patch(url, data);
  }

  async deleteDisposition(id: any) {
    let url = `/campaign/disposition/${id}`;
    return this.httpClientService.delete(url);
  }


}
