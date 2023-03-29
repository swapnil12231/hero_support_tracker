import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/services/authentication/httpclient.service';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-recent-users',
  templateUrl: './recent-users.component.html',
  styleUrls: ['./recent-users.component.css']
})
export class RecentUsersComponent implements OnInit {
  recentUserListObj: any = [];
  recentUsers: any;

  constructor(private dashboardService: DashboardService, private httpClient: HttpClientService) {
    let data: any = {
      target: {
        value: 'today'
      }
    };
    this.getRecentUsersList(data);
  }

  ngOnInit(): void {
  }

  getRecentUsersList(e: any) {
    this.recentUserListObj = {
      date: e.target.value,
      domainId: 1672730382222
    }
    this.dashboardService.getRecentUsersData(this.recentUserListObj).then(res => {
      this.recentUsers = res;
    });
  }
}

