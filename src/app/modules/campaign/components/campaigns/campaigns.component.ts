import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CampaignsService } from 'src/app/modules/campaign/services/campaigns.service';
import { NewCampaignComponent } from './new-campaign/new-campaign.component';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {
  @Output() campaignData = new EventEmitter<void>();

  @ViewChild(NewCampaignComponent)
  newCampaignComponent!: NewCampaignComponent;
  createCampaignEditData: any;

  campaignsData: any = [];
  collection: any = [];
  domainId: any;
  canNewCampaign: boolean = true;

  constructor(private campaignsService: CampaignsService) { }

  ngOnInit(): void {
    this.domainId = 1673350192404;//sessionStorage.getItem('domainId');
    this.getAllCampaigns();
  }

  getAllCampaigns() {
    this.campaignsService.getAllCampaigns(this.domainId).then(
      res => {
        if (res != null) {
          this.campaignsData = res;
        }
      },
      err => { this.campaignsData = err }
    )
  }

  async deleteCampaign(row: any) {
    const id = [row.id];
    this.campaignsService.deleteCampaign(id).then((res: any) => {
      this.getAllCampaigns();
    }).catch(err => {
      this.getAllCampaigns();
    })
  }

  editCampaign(row: any) {
    console.log(row);
    this.canNewCampaign = false;
    this.createCampaignEditData = {
      'data': row,
      'canShowUpdate': true,
      'canNewSoundFile': this.canNewCampaign
    }
    console.log(this.createCampaignEditData);
    this.newCampaignComponent.transferDataTonewCampaignChild(this.createCampaignEditData);
  }

}
