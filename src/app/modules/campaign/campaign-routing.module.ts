import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { CrmComponent } from './components/crm/crm.component';
import { DebugCampaignComponent } from './components/debug-campaign/debug-campaign.component';
import { DispositionComponent } from './components/disposition/disposition.component';
import { MainComponent } from './components/main/main.component';
import { QueueComponent } from './components/queue/queue.component';
import { rootNavigationRoutes } from 'src/app/constants/navigation-routes.constants';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: rootNavigationRoutes.campaigns, component: CampaignsComponent },
      { path: rootNavigationRoutes.disposition, component: DispositionComponent },
      { path: rootNavigationRoutes.queue, component: QueueComponent },
      { path: rootNavigationRoutes.crm, component: CrmComponent },
      { path: rootNavigationRoutes.debugCampaign, component: DebugCampaignComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
