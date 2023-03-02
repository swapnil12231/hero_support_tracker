// angular
import { Injectable } from '@angular/core';

// services
import { CookieService } from './cookie.service';
import { tap, catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEventType } from '@angular/common/http';
import { throwError } from 'rxjs';
import { filterNull } from './utils';
import { SpinnerService } from './spinner.service';
import { SessionStorageService } from 'angular-web-storage';
import { Constants } from 'src/app/models/constants';

@Injectable({
    providedIn: 'root'
})
export class HttpClientService {

    public requestIsActive = false;

    constructor(private httpClient: HttpClient,
                private cookieService: CookieService,
                private spinnerService: SpinnerService,
                public session: SessionStorageService
                ) { }

    public setRequestIsActive(val: boolean) {
        this.requestIsActive = val;
    }

    private getHttpHeaders() {
        if (this.session.get('companyCodeAdmin') != null) {
            const tenant =   this.session.get('companyCodeAdmin');
            return  this.getHttpHeadersWithTenant(tenant);
        } else {
            return {
                headers: new HttpHeaders()
                    .set('Content-Type', 'application/json')
                    .append('Authorization', 'Bearer ' + this.getJwtToken())
            };
        }
    }

    private getHttpHeadersWithPostXML() {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/xml');
        headers = headers.set('Accept', 'application/xml');
        headers = headers.set('Response-Type', 'text');
        headers = headers.append('Authorization', 'Bearer ' + this.getJwtToken());

        return {
            headers: headers,
            responseType: 'text' as 'json'
        };
    }

    private getHttpHeadersWithTenant(companyCode: string) {
        const options = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
                .append('tenant', companyCode)
                .append('Authorization', 'Bearer ' + this.getJwtToken())
        };
        return options;
    }

    public post(url: string, body: any = {}) {
        return this.httpClient.post(url, body, this.getHttpHeaders()).pipe(
            tap(res => res),
           // catchError((error: any) => this.onErrorHandler(error))
        );
    }

    public async postXMLResponse(url: string, body: any = {}) {
        return await this.httpClient.post(url, body, this.getHttpHeadersWithPostXML()).toPromise();
    }

    public postWithTenant(url: string, body: any = {}, companyCode: string) {
        return this.httpClient.post(url, body, this.getHttpHeadersWithTenant(companyCode)).pipe(
            tap(res => res),
           // catchError((error: any) => this.onErrorHandler(error))
        );
    }

    private getFormDataHttpHeaders() {
        const options = {
            headers: new HttpHeaders()
                .append('Authorization', 'Bearer ' + this.getJwtToken())
        };
        return options;
    }

    public postImage(url: string, body: any = {}) {
        return this.httpClient.post(url, body, this.getFormDataHttpHeaders()).pipe(
            tap(res => res),
            //catchError((error: any) => this.onErrorHandler(error))
        );
    }

    public getWithoutToken(url: string) {
        const headers = new HttpHeaders()
                            .set('Content-Type', 'application/json');
        return this.httpClient.get(url, { headers }).pipe(
            tap(res => res),
            //catchError((error: any) => this.onErrorHandler(error))
        );
    }

    public getWithTenant(url: string, companyCode: string) {
        const headers = new HttpHeaders()
                            .set('Content-Type', 'application/json')
                            .append('tenant', companyCode)
                            .append('Authorization', 'Bearer ' + this.getJwtToken());
        return this.httpClient.get(url, { headers }).pipe(
            tap(res => res),
            //catchError((error: any) => this.onErrorHandler(error))
        );
    }

    public get(url: string) {
        return this.httpClient.get(url, this.getHttpHeaders()).pipe(
            tap(res => res),
            //catchError((error: any) => this.onErrorHandler(error))
        );
    }

    public getWithParameters(url: string, searchParams: any) {
        let headers;
        if (this.session.get('companyCodeAdmin') != null) {
            const tenant =   this.session.get('companyCodeAdmin');
            headers = new HttpHeaders()
                .set('Content-Type', 'application/json')
                .append('tenant', tenant)
                .append('Authorization', 'Bearer ' + this.getJwtToken());
        } else {
            headers = new HttpHeaders()
                .set('Content-Type', 'application/json')
                .append('Authorization', 'Bearer ' + this.getJwtToken());
        }

        const params = searchParams;
        return this.httpClient.get(url, {headers, params}).pipe(
            tap(res => res),
           // catchError((error: any) => this.onErrorHandler(error))
        );
    }

    public put(url: string, body: any) {
        return this.httpClient.put(url, body, this.getHttpHeaders()).pipe(
            tap(res => res),
            //catchError((error: any) => this.onErrorHandler(error))
        );
    }

    public delete(url: string) {
        return this.httpClient.delete(url, this.getHttpHeaders()).pipe(
            tap(res => res),
           // catchError((error: any) => this.onErrorHandler(error))
        );
    }

    public postAndGetBlob(url: string, body: any = {}) {
    }

    private onErrorHandler(error: any) {
        if (error.error instanceof ProgressEvent) {
           
        } else {
            if (error.error === 'Invalid Token') {
                this.cookieService.deleteCookie(Constants.RefToken);
                this.cookieService.deleteCookie(Constants.Token);
                document.location.href = '';
                return;
            }
            
        }
        this.spinnerService.hideSpinner();
        return throwError(error);
    }

    private request<T>(req: HttpRequest<T>): Observable<any> {
        return this.httpClient.request(req).pipe(
            tap(res => res),
            map(res => {
                return res.type === HttpEventType.Response ? res.body as any : undefined;
            }),
            filterNull(),
            //catchError((error: any) => this.onErrorHandler(error))
            );
    }

    getJwtToken = () => this.cookieService.getCookie(Constants.Token);
}