import { Injectable } from '@angular/core';
import { HttpClientService } from '../../../services/authentication/httpclient.service';
import { Constants } from 'src/app/models/constants';

@Injectable({
  providedIn: 'root'
})
export class PauseCodeService {
  domainId: number;
  constructor(private httpClientService: HttpClientService) {
    this.domainId = parseInt(sessionStorage.getItem(Constants.domainId) || '1672730382222');

  }

  async getAllPauseCodeSet() {
    let url = `/usermanagement/pausecode/?domainid=${this.domainId}`;
    return this.httpClientService.get(url);
  }

  async getAllUserGroup() {
    let url = `/usermanagement/pausecode/get-entity?domainid=${this.domainId}`;
    return this.httpClientService.get(url);
  }

  async addCreatedPauseCode(data: any) {
    let url = `/usermanagement/pausecode/`;
    return this.httpClientService.post(url, data);
  }

   async editePausecode(id:any,data:any){
     let url=`/usermanagement/pausecode/${id}`;
     return this.httpClientService.patch(url,data);
   }

   async deletePausecode(data:any){
     let url=`/usermanagement/pausecode/?domainid=${this.domainId}`;
     return this.httpClientService.deleteBodyWithoutParameter(url,data);
   }

}
