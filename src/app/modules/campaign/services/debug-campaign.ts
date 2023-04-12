import { Injectable } from '@angular/core';
import { HttpClientService } from '../../../services/authentication/httpclient.service';

@Injectable({
    providedIn: 'root'
})
export class DebugCampaignService {
    constructor(private httpClientService: HttpClientService) { }

    async getDebugCampaign(domainId: any) {
        let url = `/campaign/debug/?domainid=${domainId}`;
        return this.httpClientService.get(url)
    }

}