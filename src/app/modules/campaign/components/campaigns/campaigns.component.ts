import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CampaignsService } from 'src/app/modules/campaign/services/campaigns.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {
  @Output() campaignData = new EventEmitter<void>();

  campaignsData: any = [];
  collection: any = [];
  domainId: any;

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
    this.campaignsService.deleteCampaign(id).then((res:any) => {
       this.getAllCampaigns();
    }).catch(err=>{
      this.getAllCampaigns();
    })
  }

}
