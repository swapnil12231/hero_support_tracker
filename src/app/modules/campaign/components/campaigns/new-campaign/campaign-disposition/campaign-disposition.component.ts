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

  dispositionTypeArray: Array<any> = [
    { id: 1, value: "FOLLOWUP", },
    { id: 2, value: "DND" },
    { id: 3, value: "TRANSFER" },
    { id: 4, value: "OTHER" },
  ];
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
    if (e.target.value == '4') {
      this.campaignsOtherType = true;  //if select other disposition type then add other type textbox
    } else {
      this.campaignsOtherType = false;
    }
  }

  submit() {
    for (let i = 0; i < this.disposition.length; i++) {
      this.disposition[i].type = this.dispositionTypeArray.find(x => x.id == this.disposition[i].type).value;
    }
    this.dispositionSubmit.emit(this.disposition);
  }
  ngOnInit(): void {
  }

}
