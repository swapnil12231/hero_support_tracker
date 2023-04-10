import { Component, OnInit } from '@angular/core';
import { CampaignsService } from 'src/app/modules/campaign/services/campaigns.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {

  campaignsData: any = [];
  collection: any = [];
  domainId: any;

  constructor(private campaignsService: CampaignsService) { }

  ngOnInit(): void {
    this.domainId = sessionStorage.getItem('domainId');
    this.getAllCampaigns();
  }

  getAllCampaigns() {
    let domainId = this.domainId;
    this.campaignsService.getAllCampaigns(domainId).then(
      res => {
        if (res != null) {
          this.campaignsData = res;
        }
      },
      err => { this.campaignsData = err }
    )
  }
}
