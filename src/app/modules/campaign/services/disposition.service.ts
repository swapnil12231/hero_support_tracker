import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/services/authentication/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class DispositionService {

  constructor(private httpClientService: HttpClientService) { }

  async getEntityToAddDispotision(domainId: any, userGroupId: any) {
    let url = `/campaign/disposition/get-entity?domainId=${domainId}&userGroupId=${userGroupId}`;
    return this.httpClientService.get(url)
  }

  async getAllCampaignDispositionData(domainId: any, userId: any, userGroupId: any) {
    let url = `/campaign/disposition/?domainId=${domainId}&userId=${userId}&userGroupId=${userGroupId}`;
    return this.httpClientService.get(url);
  }

  async addDisposition(data: any) {
    let url = `/campaign/disposition/`;
    return this.httpClientService.post(url, data);
  }


}
