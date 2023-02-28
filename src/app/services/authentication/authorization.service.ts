// angular packages
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { getCurrent } from './utils';
import { CookieService } from './cookie.service';
import { JwtService } from './jwt.service';
import { Constants } from 'src/app/models/constants';
// import { Constants } from 'models/constants';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {
    private apiPermissions$: Observable<string[]>;
    private apiFeaturePermissions$: Observable<string[]>;

    constructor(
        private cookieService: CookieService,
        private jwtService: JwtService) {
        this.apiPermissions$ = of(this.getRolesFromJwtToken());
        this.apiFeaturePermissions$ = of(this.getFeaturesFromJwtToken());
    }

    setPermission(roles: string[]) {
        this.apiPermissions$ = of(roles);
    }

    setFeaturePermission(features: string[]) {
        this.apiFeaturePermissions$ = of(features);
    }

    // Return true if at least one of the requiredPermission is in the permissions list
    // acquired from the permission service
    public hasPermission$(requiredPermission: string[]): Observable<boolean> {
        return this.apiPermissions$.pipe(map(it =>
            !!requiredPermission
                .map(rp => rp.toLowerCase())
                .find(rp => !!it.find(p => p === rp))));
    }

    // Return true if at least one of the requiredPermission is in the permissions list
    // acquired from the permission service
    public hasFeaturePermission$(requiredPermission: string[]): Observable<boolean> {
        if (requiredPermission && requiredPermission.length > 0) {
            requiredPermission = requiredPermission[0].split(',');
        }
        return this.apiFeaturePermissions$.pipe(map(it =>
            !!requiredPermission
                .map(rp => rp.toLowerCase().trim())
                .find(rp => !!it.find(p => p.toLowerCase() === rp))));
    }

    public async isAuthorisedAccess(role: string[]) {
        const isvalid = await getCurrent(this.hasFeaturePermission$(role));
        if (!isvalid) {
            document.location.href = '';
        }
    }

    private getFeaturesFromJwtToken() {
        const jwtToken = this.cookieService.getCookie(Constants.Token);
        if (jwtToken) {
            const parsedToken = this.jwtService.decodeJwtToken(jwtToken);
            const features = parsedToken.feature?.toString().toLowerCase();
            return features ? features.split(',') : [];
        }
        return [];
    }

    private getRolesFromJwtToken() {
        const jwtToken = this.cookieService.getCookie(Constants.Token);
        if (jwtToken) {
        const parsedToken = this.jwtService.decodeJwtToken(jwtToken);
        // const role = parsedToken.role.toString().toLowerCase();
        // const roles = role ? role.split(',') : [];
        return [];
        }
        return [];
    }
}
