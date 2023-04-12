import { Component, OnInit } from '@angular/core';
import { DebugCampaignService } from '../../services/debug-campaign';

@Component({
  selector: 'app-debug-campaign',
  templateUrl: './debug-campaign.component.html',
  styleUrls: ['./debug-campaign.component.css']
})
export class DebugCampaignComponent implements OnInit {
  domainId = 1672730382222;
  debugCampaignData: any;
  constructor(private debugCampaignService: DebugCampaignService) { }

  ngOnInit(): void {
    this.getDebugCampaign();
  }

  async getDebugCampaign() {debugger
    this.debugCampaignService.getDebugCampaign(this.domainId).then((res: any) => {
      console.log('res:',res)
      this.debugCampaignData = res;
    })
  }

}
