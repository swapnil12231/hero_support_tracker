import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-campaign',
  templateUrl: './new-campaign.component.html',
  styleUrls: ['./new-campaign.component.css']
})
export class NewCampaignComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }


  createCampaignSubmit(data: any) {
    console.log({ data });
  }

  createCampaignNextSubmit(data: any) {
    console.log({ data });
  }

}
