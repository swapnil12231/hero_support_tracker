import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/modules/dashboard/services/dashboard.service';

@Component({
  selector: 'app-top-campaigns',
  templateUrl: './top-campaigns.component.html',
  styleUrls: ['./top-campaigns.component.css']
})
export class TopCampaignsComponent implements OnInit {

  dataCampaignObj: any = {};
  campaignDetails: any = [];
  pbColorClassList: Array<string> = [
    "red-progressbar",
    "blue-progressbar",
    "yellow-progressbar",
    "green-progressbar",
  ];
  maxCampaignsValue: number = 0;
  constructor(private dashboardService: DashboardService
  ) {
    let data: any = {
      target: {
        value: 'this-week'
      }
    };
    this.getCampaignDetails(data);
  }

  ngOnInit(): void {

  }

  getCampaignDetails(e: any) {
    this.dashboardService.getTopCampaignsData(e.target.value).then(res => {
      this.campaignDetails = res;
      if (this.campaignDetails.length)
        this.maxCampaignsValue = this.campaignDetails.map((e: any) => e.value).reduce((a: number, b: number) => Math.max(a, b));
    },
    );
  }
}
