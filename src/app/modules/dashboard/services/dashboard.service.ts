import { Injectable } from '@angular/core';
import { HttpClientService } from '../../../services/authentication/httpclient.service';
import { Constants } from 'src/app/models/constants';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    domainId: number;

    constructor(private httpClientService: HttpClientService) {
        this.domainId = parseInt(sessionStorage.getItem(Constants.domainId) || '0');
    }

    async getTopCampaignsData(date: string) {
        let url = `/dashboard/campaigns?date=${date}&domainId=${this.domainId}`;
        return this.httpClientService.get(url);
    }

    async getRecentUsersData(date: string) {
        let url = `/dashboard/users?date=${date}&domainId=${this.domainId}`;
        return this.httpClientService.get(url);
    }

    async getTeamListData(date: string) {
        let url = `/dashboard/teams?date=${date}&domainId=${this.domainId}`;
        return this.httpClientService.get(url);
    }
}
