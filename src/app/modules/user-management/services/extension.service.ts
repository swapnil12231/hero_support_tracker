import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/services/authentication/httpclient.service';
import { Constants } from 'src/app/models/constants';

@Injectable({
  providedIn: 'root'
})
export class ExtensionService {
  domainId: number;

  constructor(private httpClientService:HttpClientService) { 
    // this.domainId = parseInt(sessionStorage.getItem(Constants.domainId) || '0');
    this.domainId = parseInt(sessionStorage.getItem(Constants.domainId) || '1672730382222');

  }

 async getAllExtension(){
    let url = `/usermanagement/extension/?domainId=${this.domainId}`;
    return this.httpClientService.get(url);
  }

  async postExtension(){
    let url = ``;
    return this.httpClientService.get(url);
  }
  
  async deleteExtension(data:any){
    let url = `/usermanagement/extension/delete`;
    return this.httpClientService.deleteBodyWithoutParameter(url,data);
  }

  async updateExtension(){
    let url = ``;
    return this.httpClientService.get(url);
  }

  
  
}
