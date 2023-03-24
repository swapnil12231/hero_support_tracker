import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CreateCampaigns } from 'src/app/models/campaign/campaigns';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {
  // @Output() hideCreateCampaignPopup = new EventEmitter<boolean>();
  @Output() createCampaignSubmit = new EventEmitter<any>();

  createCampaign!: CreateCampaigns;

  constructor() {
    this.createCampaign = new CreateCampaigns();
  }


  submit() {
    this.createCampaignSubmit.emit(this.createCampaign);
  }

  ngOnInit(): void {
  }

}
