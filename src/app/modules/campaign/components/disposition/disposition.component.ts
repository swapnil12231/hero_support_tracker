import { Component, OnInit } from '@angular/core';
import { DispositionService } from '../../services/disposition.service';


@Component({
  selector: 'app-disposition',
  templateUrl: './disposition.component.html',
  styleUrls: ['./disposition.component.css']
})
export class DispositionComponent implements OnInit {
  crmDispoData: any = [];

  constructor(private dispositionService: DispositionService) {
  }
  ngOnInit(): void {

    this.getCampaignDispositionData();
  }


  getCampaignDispositionData() {

    this.dispositionService.getAllCampaignDispositionData().then(res => {
      this.crmDispoData = res;
    },
      err => { this.crmDispoData = err }
    )
  }

}
