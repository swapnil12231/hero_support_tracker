import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { TopCampaignsComponent } from './components/top-campaigns/top-campaigns.component';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { RecentUsersComponent } from './components/recent-users/recent-users.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MainDashboardComponent,
    TopCampaignsComponent,
    TeamsListComponent,
    RecentUsersComponent
  ],
  imports: [
    CommonModule,
    ProgressBarModule,
    HttpClientModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
