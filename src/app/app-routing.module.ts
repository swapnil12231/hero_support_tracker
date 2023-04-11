import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/main/main.component';
import { AuthGuard } from './guards/auth.guard';
import { ForgotPasswordComponent } from './modules/authentication/components/forgot-password/forgot-password.component';
import { LoginComponent } from './modules/authentication/components/login/login.component';
import { ResetPasswordComponent } from './modules/authentication/components/reset-password/reset-password.component';
import { rootNavigationRoutes } from './constants/navigation-routes.constants';

const routes: Routes = [
  {
    path: rootNavigationRoutes.login,
    component: LoginComponent
  },
  {
    path: rootNavigationRoutes.forgotPassword,
    component: ForgotPasswordComponent
  },
  {
    path: rootNavigationRoutes.resetPassword,
    component: ResetPasswordComponent,
  },
  {
    path: '',
    component: MainComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: rootNavigationRoutes.dashboard,
        pathMatch: 'full',
      },
      {
        path: rootNavigationRoutes.campaign,
        loadChildren: () => import('./modules/campaign/campaign.module').then(m => m.CampaignModule)
      },
      {
        path: rootNavigationRoutes.configuration,
        loadChildren: () => import('./modules/configuration/configuration.module').then(m => m.ConfigurationModule)
      },
      {
        path: rootNavigationRoutes.dashboard,
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: rootNavigationRoutes.deletedData,
        loadChildren: () => import('./modules/deleted-data/deleted-data.module').then(m => m.DeletedDataModule)
      },
      {
        path: rootNavigationRoutes.license,
        loadChildren: () => import('./modules/license/license.module').then(m => m.LicenseModule)
      },
      {
        path: rootNavigationRoutes.manageLeads,
        loadChildren: () => import('./modules/manage-leads-and-list/manage-leads-and-list.module').then(m => m.ManageLeadsAndListModule)
      },
      {
        path: rootNavigationRoutes.socialMedia,
        loadChildren: () => import('./modules/social-media/social-media.module').then(m => m.SocialMediaModule)
      },
      {
        path: rootNavigationRoutes.userManagement,
        loadChildren: () => import('./modules/user-management/user-management.module').then(m => m.UserManagementModule)
      },
      {
        path: rootNavigationRoutes.voiceServer,
        loadChildren: () => import('./modules/voice-server/voice-server.module').then(m => m.VoiceServerModule)
      },
      {
        path: rootNavigationRoutes.overview,
        loadChildren: () => import('./modules/overview/overview.module').then(m => m.OverviewModule)
      },
      {
        path: rootNavigationRoutes.realTime,
        loadChildren: () => import('./modules/real-time/real-time.module').then(m => m.RealTimeModule)
      },
      {
        path: rootNavigationRoutes.reports,
        loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path: rootNavigationRoutes.ivrDesign,
        loadChildren: () => import('./modules/ivr-design/ivr-design.module').then(m => m.IvrDesignModule)
      },
      {
        path: rootNavigationRoutes.wfm,
        loadChildren: () => import('./modules/wfm/wfm.module').then(m => m.WfmModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
