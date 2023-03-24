import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { navigationRoutes } from '../constants/navigation-routes.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let res = this.authenticationService.isAuthenticated();
    if (!res) {
      this.router.navigate([navigationRoutes.login]);
    }
    return res;
  }

}
