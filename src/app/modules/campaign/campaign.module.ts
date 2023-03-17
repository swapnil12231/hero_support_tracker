import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CrmComponent } from './components/crm/crm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTableComponent } from './components/crm/new-crm/create-table/create-table.component';
import { NewCrmComponent } from './components/crm/new-crm/new-crm.component';
import { DesignTableComponent } from './components/crm/new-crm/design-table/design-table.component';
import { CreateCrmComponent } from './components/crm/new-crm/create-crm/create-crm.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { NewCampaignComponent } from './components/campaigns/new-campaign/new-campaign.component';
import { CreateCampaignComponent } from './components/campaigns/new-campaign/create-campaign/create-campaign.component';
import { MainComponent } from './components/main/main.component';
import { DispositionComponent } from './components/disposition/disposition.component';
import { QueueComponent } from './components/queue/queue.component';
import { DebugCampaignComponent } from './components/debug-campaign/debug-campaign.component';


@NgModule({
  declarations: [
    CrmComponent,
    CreateTableComponent,
    NewCrmComponent,
    DesignTableComponent,
    CreateCrmComponent,
    CampaignsComponent,
    NewCampaignComponent,
    CreateCampaignComponent,
    MainComponent,
    DispositionComponent,
    QueueComponent,
    DebugCampaignComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CampaignRoutingModule
  ]
})
export class CampaignModule { }
