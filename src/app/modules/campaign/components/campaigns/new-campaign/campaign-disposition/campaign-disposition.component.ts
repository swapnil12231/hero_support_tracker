import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Disposition } from 'src/app/models/campaign/campaigns';

@Component({
  selector: 'app-campaign-disposition',
  templateUrl: './campaign-disposition.component.html',
  styleUrls: ['./campaign-disposition.component.css']
})
export class CampaignDispositionComponent implements OnInit {

  @Output() dispositionSubmit = new EventEmitter<any>();

  disposition!: Disposition;
  constructor() {
    this.disposition = new Disposition();
  }
  submit() {
    this.dispositionSubmit.emit(this.disposition);
  }
  ngOnInit(): void {
  }

}
