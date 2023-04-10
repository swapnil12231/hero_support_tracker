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
  usergroupid: any;
  userId: any;
  constructor(private dispositionService: DispositionService) {
  }
  ngOnInit(): void {
    this.domainId = sessionStorage.getItem('domainId');
    this.usergroupid = sessionStorage.getItem('usergroupid');
    this.userId = sessionStorage.getItem('id');
    this.getCampaignDispositionData();
  }


  getCampaignDispositionData() {

    this.dispositionService.getAllCampaignDispositionData(this.domainId, this.userId, this.usergroupid).then(
      res => {
        if (res != null) {
          this.crmDispoData = res;
        }
      },
      err => { this.crmDispoData = err }
    )
  }

}
