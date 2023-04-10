import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { dispositionType, newCampaign } from 'src/app/models/campaign/campaignDisposition';
import { Disposition } from 'src/app/models/campaign/campaigns';
import { DispositionModel } from 'src/app/models/campaign/disposition';

@Component({
  selector: 'app-campaign-disposition',
  templateUrl: './campaign-disposition.component.html',
  styleUrls: ['./campaign-disposition.component.css']
})
export class CampaignDispositionComponent implements OnInit {

  @Output() dispositionSubmit = new EventEmitter<any>();

  disposition!: Disposition[];
  dispositionModel!: DispositionModel;
  campaignsOtherType: boolean = false;
  newCampaign!: newCampaign;
  constructor() {

    this.disposition = new Array<Disposition>();
    this.disposition.push(new Disposition());
  }

  AddAnotherDisposition() {
    let disposition = new Disposition();
    disposition.name = "";
    disposition.type = Object({});
    disposition.description = "";
    disposition.campaignsOtherType = "";
    this.disposition.push(disposition);

  }

  getDispoType(e: any) {
    if (e.target.value == 'others') {
      this.campaignsOtherType = true;
    } else {
      this.campaignsOtherType = false;
    }
  }

  submit() {
    this.dispositionSubmit.emit(this.disposition);
  }
  ngOnInit(): void {
  }

}
