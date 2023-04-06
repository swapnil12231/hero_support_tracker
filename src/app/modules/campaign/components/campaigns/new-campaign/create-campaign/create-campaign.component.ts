import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CreateCampaigns } from 'src/app/models/campaign/campaigns';
import { CampaignsService } from 'src/app/modules/campaign/services/campaigns.service';
// import { ToastModule } from 'primeng/toast';
// import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {
  // @Output() hideCreateCampaignPopup = new EventEmitter<boolean>();
  @Output() createCampaignSubmit = new EventEmitter<any>();

  createCampaign!: CreateCampaigns;
  campaignsData: any = [];
  domainId: any = 1672730382222;
  crmData: any;
  isAutodispose: boolean = false;
  startCallCrmData: any;
  startCallUrl: any;

  constructor(private campaignsService: CampaignsService) {
    this.createCampaign = new CreateCampaigns();
  }


  autoDisposeValue() {
    if (this.createCampaign.campaignsAutoDispose == 'allow') {
      this.isAutodispose = true;
    }
    else {
      this.isAutodispose = false;
    }

  }

  submit() {
    this.createCampaignSubmit.emit(this.createCampaign);
  }


  async getStartCallCrmData() {
    this.campaignsService.getEntityToAddCampaign(this.domainId).then(
      res => {
        if (res) {
          this.startCallCrmData = res;
          this.crmData = this.startCallCrmData.crmData;
          this.startCallUrl = this.startCallCrmData.startCallUrl;
        }
      },
      err => { this.startCallCrmData = err }
    )
  }

  getCrmTableId(event: any) {
    let res1: any[] = this.crmData;
    this.createCampaign.selectedCrmTableId = res1.find(x => x.id == this.createCampaign.campaignsCrm).tableid;
  }

  ngOnInit(): void {
    this.getStartCallCrmData();
  }

}
