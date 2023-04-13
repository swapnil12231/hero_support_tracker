import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { routes } from './custom.route';
import { HeaderComponent } from './core/header/header.component';
import { MainComponent } from './core/main/main.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBarModule } from 'primeng/progressbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './modules/authentication/components/login/login.component';
import { ResetPasswordComponent } from './modules/authentication/components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './modules/authentication/components/forgot-password/forgot-password.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
