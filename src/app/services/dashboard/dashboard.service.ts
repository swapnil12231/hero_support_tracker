import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { last } from 'rxjs';
import { getCurrent } from '../authentication/utils';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    constructor(private http: HttpClient) { }

    async getLastMonthCampaign(dataCampaignObj: any) {
        let url = `http://192.168.1.71:8080/dashboard/?date=${dataCampaignObj.date}&domainId=${dataCampaignObj.domainId}`;
        return await getCurrent(this.http.get(url));
    }

    async getRecentUsers(recentUserListObj: any) {
        let url = `http://192.168.1.71:8080/dashboard/recentUsers?date=${recentUserListObj.date}&domainId=${recentUserListObj.domainId}`;
        return await getCurrent(this.http.get(url));
    }

    async getAllTeams(teamListObj: any) {
        let url = `http://192.168.1.71:8080/dashboard/teams?date=${teamListObj.date}&domainId=${teamListObj.domainId}`;
        return await getCurrent(this.http.get(url));
    }
}
