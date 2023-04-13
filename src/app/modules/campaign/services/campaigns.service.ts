import { Injectable } from '@angular/core';
import { HttpClientService } from '../../../services/authentication/httpclient.service';
import { Constants } from 'src/app/models/constants';

@Injectable({
    providedIn: 'root'
})
export class CampaignsService {
    domainId: number;
    constructor(private httpClientService: HttpClientService) {
        this.domainId = parseInt(sessionStorage.getItem(Constants.domainId) || '0');
    }

    async getEntityToAddCampaign() {
        let url = `/campaign/campaigns/get-entity?domainid=${this.domainId}`;
        return this.httpClientService.get(url)
    }

    async getAllCampaigns() {
        let url = `/campaign/campaigns/?domainid=${this.domainId}`;
        return this.httpClientService.get(url)
    }

    async addCampaigns(data: any) {
        let url = `/campaign/campaigns/`;
        return this.httpClientService.post(url, data)
    }

    async deleteCampaign(data: any) {
        let url = `/campaign/campaigns/delete`;
        return this.httpClientService.deleteWithBody(url, data);
    }

}