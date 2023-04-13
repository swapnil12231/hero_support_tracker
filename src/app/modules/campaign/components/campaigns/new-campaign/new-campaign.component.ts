import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { dispositionType, newCampaign } from 'src/app/models/campaign/campaignDisposition';
import { Disposition } from 'src/app/models/campaign/campaigns';
import { CampaignsService } from 'src/app/modules/campaign/services/campaigns.service';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { Constants } from 'src/app/models/constants';

@Component({
  selector: 'app-new-campaign',
  templateUrl: './new-campaign.component.html',
  styleUrls: ['./new-campaign.component.css']
})
export class NewCampaignComponent implements OnInit {

  @ViewChild(CreateCampaignComponent)
  createCampaignComponent!: CreateCampaignComponent;
  createCampaignEditData: any;


  @Output()
  refreshCampaigns = new EventEmitter<void>();
  campaignsData: any;
  createCampaignObj: any;
  dispositionObj1: any;
  dispositionObj: any;
  addCampaignObj: any;
  domainId: any;
  newCampaign!: newCampaign;
  constructor(private campaignsService: CampaignsService) {

    this.newCampaign = new newCampaign();
    this.newCampaign.disposition = new Array<Disposition>();
  }

  ngOnInit(): void {
    this.domainId = parseInt(sessionStorage.getItem(Constants.domainId) || '0');
  }


  createCampaignSubmit(data: any) {
    this.createCampaignObj = data;
  }

  createCampaignNextSubmit(data: any) {

    this.createCampaignObj.disposition = data;
    if (this.createCampaignObj.campaignsMask == 'true') {
      this.createCampaignObj.campaignsMask = true;
    }

    else {
      this.createCampaignObj.isMask = false;
    }

    if (this.createCampaignObj.campaignsMinimumTime == undefined || this.createCampaignObj.campaignsMinimumTime == null) {
      this.createCampaignObj.campaignsMinimumTime = "";
      this.createCampaignObj.campaignsMaximumTime = "";
    }

    this.newCampaign.name = this.createCampaignObj.campaignsName;
    this.newCampaign.description = this.createCampaignObj.campaignsDescription;
    this.newCampaign.status = this.createCampaignObj.campaignsStatus;
    this.newCampaign.autoDispose = this.createCampaignObj.campaignsAutoDispose;
    this.newCampaign.minimumTime = this.createCampaignObj.campaignsMinimumTime;
    this.newCampaign.maximumTime = this.createCampaignObj.campaignsMaximumTime;
    this.newCampaign.callStartUrl = this.createCampaignObj.campaignsStartCallUrl;
    this.newCampaign.tableId = this.createCampaignObj.selectedCrmTableId;

    this.newCampaign.crmId = this.createCampaignObj.campaignsCrm;
    this.newCampaign.isMask = this.createCampaignObj.campaignsMask;
    this.newCampaign.domainId = this.domainId;

    this.newCampaign.crmHistory = this.createCampaignObj.campaignsCrmHistory;
    this.newCampaign.disposition = this.createCampaignObj.disposition;

    this.campaignsService.addCampaigns(this.newCampaign).then(
      res => {
        if (res != null) {
          this.campaignsData = res;
          this.refreshCampaigns.emit();
        }
      },
      err => { this.campaignsData = err }
    )
  }

  transferDataTonewCampaignChild(parentData: any) {
    this.createCampaignComponent.childData(parentData);

  }
}
