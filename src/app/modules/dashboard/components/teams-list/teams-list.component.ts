import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

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
    this.recentTeamsObj = {
      date: e.target.value,
      domainId: 1672730382222
    }
    this.dashboardService.getTeamListData(this.recentTeamsObj).then(res => {
      this.teamListObj = res;
    });
  }

}