// angular
import { Injectable } from '@angular/core';

// services
import { CookieService } from './cookie.service';
import { tap, catchError, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEventType } from '@angular/common/http';
import { throwError } from 'rxjs';
import { filterNull, getCurrent } from './utils';
import { SpinnerService } from './spinner.service';
import { SessionStorageService } from 'angular-web-storage';
import { Constants } from 'src/app/models/constants';
import { AppSettingsService } from './appsettings.service';

@Injectable({
    providedIn: 'root'
})
export class HttpClientService {

    public webServiceUrl$ = this.appSettingsService.appSettings$.pipe(map(it => it.WebServiceUrl));
    public requestIsActive = false;

    constructor(private httpClient: HttpClient,
        private cookieService: CookieService,
        private spinnerService: SpinnerService,
        public session: SessionStorageService,
        private appSettingsService: AppSettingsService
    ) { }

    public setRequestIsActive(val: boolean) {
        this.requestIsActive = val;
    }

    private getHttpHeaders() {
        const options = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
                .append('Authorization', 'Bearer ' + this.getJwtToken())
                .append('version', 'V1.0.0'),
        };
        return options;
    }

    private getHttpHeadersformData() {
        const options = {
            headers: new HttpHeaders()
                .append('Authorization', 'Bearer ' + this.getJwtToken())
                .append('version', 'V1.0.0')
        };
        return options;
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

    public async post(url: string, body: any = {}, params?: any) {
        let response = await this.postRequest(url, body, params);
        return response;
    }

    public async postWithFormData(url: string, body: any, params?: any) {
        return await this.postRequestForFormData(url, body, params);   
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

    public async get(url: string) {
        const response = await this.getRequest(url);
        return response;
    }

    public getWithParameters(url: string, searchParams: any) {
        let headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .append('Authorization', 'Bearer ' + this.getJwtToken());


        const params = searchParams;
        return this.httpClient.get(url, { headers, params }).pipe(
            tap(res => res),
            // catchError((error: any) => this.onErrorHandler(error))
        );
    }

    // public put(url: string, body: any) {
    //     return this.httpClient.put(url, body, this.getHttpHeaders()).pipe(
    //         tap(res => res),
            // catchError((error: any) => this.onErrorHandler(error))
    //     );
    // }
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
    
    private postRequest = <T>(url: string, payload: any, params?: any) =>getCurrent(this.webServiceUrl$.pipe(
        switchMap(baseUrl => this.httpClient.post(baseUrl + url, payload, this.getHttpHeaders())),
        map(x => x as T)
    ))

    private postRequestForFormData = <T>(url: string, payload: any, params?: any) => getCurrent(this.webServiceUrl$.pipe(
        switchMap(baseUrl => this.httpClient.post(baseUrl + url, payload,this.getHttpHeadersformData())),
        map(x => x as T)
    ))

    private getRequest = <T>(url: string) => getCurrent(this.webServiceUrl$.pipe(
        switchMap(baseUrl => this.httpClient.get(baseUrl + url, this.getHttpHeaders())),
        map(x => x as T))
    )

    public async deleteWithBody(url: string, body: any = {}, params?: any) {
        let response = await this.deleteWithBodyUtil(url, body, params);
        return response;
    }

    public async deleteBodyWithoutParameter(url: string, body: any = {}) {
        let response = await this.deleteWithBodyUtil(url, body);
        return response;
    }

    private deleteWithBodyUtil = <T>(url: string, payload: any, params?: any) => getCurrent(this.webServiceUrl$.pipe(
        switchMap(baseUrl => this.httpClient.request('delete', baseUrl + url, { body: payload, headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.getJwtToken() } })),
        map(x => x as T)
    ))

    public async put(url: string, body: any = {}, params?: any) {
        let response = await this.putForFormDataBody(url, body, params);
        return response;
    }

    private putForFormDataBody = <T>(url: string, payload: any, params?: any) =>getCurrent(this.webServiceUrl$.pipe(
        switchMap(baseUrl => this.httpClient.put(baseUrl + url, payload, this.getHttpHeadersformData())),
        map(x => x as T)
    ))

    getJwtToken = () => this.cookieService.getCookie(Constants.Token);
}
