import { HttpClient } from '@angular/common/http';
import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { DashboardModule } from '../../dashboard.module';

@Component({
  selector: 'app-top-campaigns',
  templateUrl: './top-campaigns.component.html',
  styleUrls: ['./top-campaigns.component.css']
})
export class TopCampaignsComponent implements OnInit {

  dataCampaignObj: any = {};
  campaignDetails: any = [];

  constructor(private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {

  }

  getCampaignDetails(e: any) {
    this.dataCampaignObj = {
      date: e.target.value,
      domainId: 1672730382222
    }
    this.dashboardService.getLastMonthCampaign(this.dataCampaignObj).then(res => {

      if (res != null) {
        this.campaignDetails = res;
        if (this.campaignDetails.length == 0) {
          this.campaignDetails = null;
        }
      }
    },
      err => { this.campaignDetails = err });
  }
}
