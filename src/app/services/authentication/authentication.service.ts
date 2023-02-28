import { Injectable } from '@angular/core';
import { Subject, defer, BehaviorSubject } from 'rxjs';
import { getCurrent, filterNull, weakShareReplay } from './utils';
import { switchMap, startWith, map, repeatWhen, delay, distinctUntilChanged } from 'rxjs/operators';
import { CookieService } from './cookie.service';
import { JwtService } from './jwt.service';
import { AuthorizationService } from './authorization.service';
import { Constants } from 'src/app/models/constants';


const timeDiff = (from: Date, until: Date): number => (Math.round((from.getTime() - until.getTime())));

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {

    private onNewJwtToken$ = new Subject();
    public homeUrl$ = new BehaviorSubject<string>('');

    constructor(private cookieService: CookieService,
        private jwtService: JwtService,
        private authorizationService: AuthorizationService,
       
    ) {
        // const role = this.getRolesFromJwtToken();
        // this.isLoggedIn = role.length > 0;
    }

    public jwtTokenString$ = this.onNewJwtToken$.pipe(
        startWith({}),
        map(_ => this.getJwtToken()),
        filterNull(), // Only try to refresh JWT token when there actually is one
        switchMap(token => defer(() => this.maybeRefreshToken(token)).pipe(
            map(_ => this.getJwtToken()),
            repeatWhen(e => e.pipe(delay(5000))))
        ),
        distinctUntilChanged(),
        weakShareReplay(1));

    public isLoggedIn$ = this.jwtTokenString$.pipe(map(it => !!it));

    public isLoggedIn = false;
    async isAuthenticated() {
        return await getCurrent(this.isLoggedIn$);
    }

    async maybeRefreshToken(currentToken: string) {
        currentToken = this.getJwtToken()!;
        try {
            const { exp, tid } = this.jwtService.decodeJwtToken(currentToken);
            if (timeDiff(new Date(exp * 1000), new Date(Date.now())) > 10000) {
                return;
            }
        } catch (e) {
            await this.logout('ReasonTokenRefreshFailed');
            throw e;
        }
    }

    public login = () => this.onNewJwtToken$.next(void 0);

    logout(reason: string) {
       
        this.cookieService.deleteCookie(Constants.RefToken);
        this.cookieService.deleteCookie(Constants.Token);
        this.isLoggedIn = false;        
        this.onNewJwtToken$.next(void 0);
        this.redirectToLoginPage();
    }

     LogonPortalSetCredentials(jwttoken: string, refreshtoken: string) {
        
        const parsedToken = this.jwtService.decodeToken(jwttoken);       
        this.saveJwtToken(jwttoken);
        this.saveRefreshToken(refreshtoken, jwttoken); 
        if (parsedToken.sub) {           
            this.isLoggedIn = true;
        }
        // this.setPermission();
        // this.setFeaturePermission();
        this.onNewJwtToken$.next(void 0);
    }

    public getRolesFromJwtToken() {
        const jwtToken = this.cookieService.getCookie(Constants.Token);
        if (jwtToken) {
            const parsedToken = this.jwtService.decodeJwtToken(jwtToken);
            const role = parsedToken.role.toString().toLowerCase();
            const roles = role ? role.split(',') : [];
            return roles;
        }
        return [];
    }

    public getFromJwtToken() {
        const jwtToken = this.cookieService.getCookie(Constants.Token);
        if (jwtToken) {          
            return jwtToken;
        }
        return [];
    }

    private getFeaturesFromJwtToken() {
        const jwtToken = this.cookieService.getCookie(Constants.Token);
        if (jwtToken) {
            const parsedToken = this.jwtService.decodeJwtToken(jwtToken);
            return parsedToken.feature;
        }
        return [];
    }

    public getCompanyCodeFromJwtToken() {
        const jwtToken = this.cookieService.getCookie(Constants.Token);
        if (jwtToken) {
            const parsedToken = this.jwtService.decodeJwtToken(jwtToken);
            const tenant = parsedToken.tenant;
            return tenant;
        }
        return null;
    }

    public async redirectToLoginPage() {
        document.location.href = '';
    }

    async setUser() {
        const jwt = this.getJwtToken();
        const parsedToken = this.jwtService.decodeToken(jwt!);
        //await this.userService.getUser(parsedToken.role);
    }

    setPermission = () => this.authorizationService.setPermission(this.getRolesFromJwtToken());
    setFeaturePermission = () => this.authorizationService.setFeaturePermission(this.getFeaturesFromJwtToken());

    getLoggedInUser = (token: string) => this.jwtService.decodeToken(token).sub;

    getJwtToken = () => this.cookieService.getCookie(Constants.Token);
    getRefreshToken = () => this.cookieService.getCookie(Constants.RefToken);

    saveJwtToken(token: string) {
        document.cookie = Constants.Token + '=' + token + ';expires=' +
            new Date(this.jwtService.decodeJwtToken(token).exp * 1000 + 60000).toUTCString() + ';path=/';
    }

    saveRefreshToken = (token: string, jwtToken: string) => document.cookie = Constants.RefToken + '=' + token + ';expires=' +
        new Date(this.jwtService.decodeJwtToken(jwtToken).exp * 1000 + 60000).toUTCString() + ';path=/'
}
