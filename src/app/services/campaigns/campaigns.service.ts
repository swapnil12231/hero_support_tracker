import { Injectable } from '@angular/core';
import { HttpClientService } from '../authentication/httpclient.service';
import { getCurrent } from '../authentication/utils';

@Injectable({
    providedIn: 'root'
})
export class CampaignsService {
    constructor(private httpClientService: HttpClientService) { }

    async getEntityToAddCampaign(domainId: any) {
        let url = `/campaign/campaigns/get-entity?domainid=${domainId}`;
        return this.httpClientService.get(url)
    }

    async getAllCampaigns(domainId: any) {
        let url = `/campaign/campaigns/?domainid=${domainId}`;
        return this.httpClientService.get(url)
    }

    async addCampaigns(data: any) {
        let url = `/campaign/campaigns/`;
        return this.httpClientService.post(url, data)
    }

}