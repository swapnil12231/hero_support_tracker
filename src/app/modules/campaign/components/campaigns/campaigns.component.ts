import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { CampaignsService } from 'src/app/services/campaigns/campaigns.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {

  campaignsData: any = [];
  p: any;
  collection: any = [];

  constructor(private campaignsService: CampaignsService) { }

  ngOnInit(): void {
    this.getAllCampaigns();
  }

  getAllCampaigns() {
    let domainId = 1672730382222;
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
