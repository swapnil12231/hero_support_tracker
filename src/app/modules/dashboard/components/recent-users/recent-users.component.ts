import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-recent-users',
  templateUrl: './recent-users.component.html',
  styleUrls: ['./recent-users.component.css']
})
export class RecentUsersComponent implements OnInit {
  recentUserListObj: any = [];
  recentUsers: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

  getRecentUsersList(e: any) {
    this.recentUserListObj = {
      date: e.target.value,
      domainId: 1672730382222
    }
    this.dashboardService.getRecentUsers(this.recentUserListObj).then(res => {

      if (res != null) {
        this.recentUsers = res;
        if (this.recentUsers.length == 0) {
          this.recentUsers = null;
        }
      }
    },
      err => { this.recentUsers = err });
  }
}

