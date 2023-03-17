import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { CrmComponent } from './components/crm/crm.component';
import { DebugCampaignComponent } from './components/debug-campaign/debug-campaign.component';
import { DispositionComponent } from './components/disposition/disposition.component';
import { MainComponent } from './components/main/main.component';
import { QueueComponent } from './components/queue/queue.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'campaigns', component: CampaignsComponent },
      { path: 'disposition', component: DispositionComponent },
      { path: 'queue', component: QueueComponent },
      { path: 'crm', component: CrmComponent },
      { path: 'debug-campaign', component: DebugCampaignComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
