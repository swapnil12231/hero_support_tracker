import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CrmComponent } from './components/crm/crm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTableComponent } from './components/crm/new-crm/create-table/create-table.component';
import { NewCrmComponent } from './components/crm/new-crm/new-crm.component';
import { DesignTableComponent } from './components/crm/new-crm/design-table/design-table.component';
import { CreateCrmComponent } from './components/crm/new-crm/create-crm/create-crm.component';


@NgModule({
  declarations: [
    CrmComponent,
    CreateTableComponent,
    NewCrmComponent,
    DesignTableComponent,
    CreateCrmComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CampaignRoutingModule
  ]
})
export class CampaignModule { }
