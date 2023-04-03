import { Component, OnInit } from '@angular/core';
import { CampaignsService } from 'src/app/modules/campaign/services/campaigns.service';

@Component({
  selector: 'app-new-campaign',
  templateUrl: './new-campaign.component.html',
  styleUrls: ['./new-campaign.component.css']
})
export class NewCampaignComponent implements OnInit {
  campaignsData: any;
  createCampaignObj: any;
  dispositionObj: any;
  addCampaignObj: any;
  domainId = 1673350192404;
  constructor(private campaignsService: CampaignsService) {
  }

  ngOnInit(): void {
  }


  createCampaignSubmit(data: any) {
    this.createCampaignObj = data;
  }

  createCampaignNextSubmit(data: any) {
    if (this.createCampaignObj.campaignsMask == 'true') {
      this.createCampaignObj.campaignsMask = true;
    }

    else {
      this.createCampaignObj.isMask = false;
    }


    this.createCampaignObj;

    if (this.createCampaignObj.campaignsMinimumTime == undefined || this.createCampaignObj.campaignsMinimumTime == null) {
      this.createCampaignObj.campaignsMinimumTime = "";
      this.createCampaignObj.campaignsMaximumTime = "";
    }


    let dataObj = {
      "name": this.createCampaignObj.campaignsName,
      "description": this.createCampaignObj.campaignsDescription,
      "status": this.createCampaignObj.campaignsStatus,
      "autoDispose": this.createCampaignObj.campaignsAutoDispose,
      "minimumTime": this.createCampaignObj.campaignsMinimumTime,
      "maximumTime": this.createCampaignObj.campaignsMaximumTime,
      "callStartUrl": this.createCampaignObj.campaignsStartCallUrl,
      "tableId": this.createCampaignObj.selectedCrmTableId,
      "domainId": this.domainId,
      "crmId": this.createCampaignObj.campaignsCrm,
      "isMask": this.createCampaignObj.campaignsMask,
      "crmHistory": this.createCampaignObj.campaignsCrmHistory,
      "disposition": [
        {

          "name": data.name,
          "description": data.description,
          "type": data.type,
          "otherType": data.campaignsOtherType,
          "autoDispose": data.autoDispose
        }
      ]
    }
    this.campaignsService.addCampaigns(dataObj).then(
      res => {
        if (res != null) {
          this.campaignsData = res;
        }
      },
      err => { this.campaignsData = err }
    )
  }
}
