import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/modules/dashboard/services/dashboard.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  recentTeamsObj: any = {}
  teamListObj: any;
  constructor(private dashboardService: DashboardService) {
    let data: any = {
      target: {
        value: 'today'
      }
    };
    this.selectTeams(data);
  }

  ngOnInit(): void {
  }

  selectTeams(e: any) {
    this.dashboardService.getTeamListData(e.target.value).then(res => {
      this.teamListObj = res;
    });
  }

}
