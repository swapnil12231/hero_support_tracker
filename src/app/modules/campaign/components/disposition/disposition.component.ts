import { Component, OnInit } from '@angular/core';
import { DispositionService } from '../../services/disposition.service';


@Component({
  selector: 'app-disposition',
  templateUrl: './disposition.component.html',
  styleUrls: ['./disposition.component.css']
})
export class DispositionComponent implements OnInit {
  crmDispoData: any = [];
  domainId: any;
  constructor(private dispositionService: DispositionService) {
  }
  ngOnInit(): void {
    this.domainId = sessionStorage.getItem('domainId');
    this.getCampaignDispositionData();
  }

  userId = 1672750235414
  userGroupId = 0;


  getCampaignDispositionData() {
    let domainId = 1672730382222
    let userId = 1672750235414
    let userGroupId = 0;
    this.dispositionService.getAllCampaignDispositionData(domainId, userId, userGroupId).then(
      res => {
        if (res != null) {
          this.crmDispoData = res;
        }
      },
      err => { this.crmDispoData = err }
    )
  }

}
