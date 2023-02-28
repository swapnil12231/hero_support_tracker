import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'campaign',
    loadChildren: () => import('./modules/campaign/campaign.module').then(m => m.CampaignModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./modules/configuration/configuration.module').then(m => m.ConfigurationModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'deleted-data',
    loadChildren: () => import('./modules/deleted-data/deleted-data.module').then(m => m.DeletedDataModule)
  },
  {
    path: 'license',
    loadChildren: () => import('./modules/license/license.module').then(m => m.LicenseModule)
  },
  {
    path: 'manage-leads',
    loadChildren: () => import('./modules/manage-leads-and-list/manage-leads-and-list.module').then(m => m.ManageLeadsAndListModule)
  },
  {
    path: 'social-media',
    loadChildren: () => import('./modules/social-media/social-media.module').then(m => m.SocialMediaModule)
  },
  {
    path: 'user-management',
    loadChildren: () => import('./modules/user-management/user-management.module').then(m => m.UserManagementModule)
  },
  {
    path: 'voice-server',
    loadChildren: () => import('./modules/voice-server/voice-server.module').then(m => m.VoiceServerModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
