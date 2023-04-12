import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/modules/dashboard/services/dashboard.service';
import { Constants } from 'src/app/models/constants';

@Component({
  selector: 'app-recent-users',
  templateUrl: './recent-users.component.html',
  styleUrls: ['./recent-users.component.css']
})
export class RecentUsersComponent implements OnInit {
  recentUserListObj: any = [];
  recentUsers: any;

  constructor(private dashboardService: DashboardService) {
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
    this.dashboardService.getRecentUsersData(e.target.value).then(res => {
      this.recentUsers = res;
    });
  }
}

