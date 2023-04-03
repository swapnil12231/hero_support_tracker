import { Injectable } from '@angular/core';
import { HttpClientService } from '../../../services/authentication/httpclient.service';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(private httpClientService: HttpClientService) { }

    async getTopCampaignsData(dataCampaignObj: any) {
        let url = `/dashboard/?date=${dataCampaignObj.date}&domainId=${dataCampaignObj.domainId}`;
        return this.httpClientService.get(url);
    }

    async getRecentUsersData(recentUserListObj: any) {
        let url = `/dashboard/recentUsers?date=${recentUserListObj.date}&domainId=${recentUserListObj.domainId}`;
        return this.httpClientService.get(url);
    }

    async getTeamListData(teamListObj: any) {
        let url = `/dashboard/teams?date=${teamListObj.date}&domainId=${teamListObj.domainId}`;
        return this.httpClientService.get(url);
    }
}
