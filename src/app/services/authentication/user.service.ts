import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private authenticationService: AuthenticationService) { }
  user: any;
  getCurrentUser() {
    this.user = JSON.parse(sessionStorage.getItem('user') || '');
    if (!this.user) {
      this.authenticationService.getJwtToken();
    }
    return this.user;
  }
}
