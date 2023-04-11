import { Injectable } from '@angular/core';
import { HttpClientService } from '../authentication/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class PauseCodeService {

  constructor(private  httpClientService: HttpClientService) {
  }

  async getAllPauseCodeSet(domainId:any)
  {
       let url=`/usermanagement/pausecode/?domainid=${domainId}`;
       return this.httpClientService.get(url);
  }  

 async getAllUserGroup(domainId:any){
  let url=`/usermanagement/pausecode/get-entity?domainid=${domainId}`;
  return this.httpClientService.get(url);
 }

 async addCreatedPauseCode(data:any){
   let url=`/usermanagement/pausecode/`;
   return this.httpClientService.post(url, data);
 }

//  async editePausecode(data:any){
//    let url=``;
//    return this.httpClientService.put(url,data);
//  }

//  async deletePausecode(data:any){
//    let url=``;
//    return this.httpClientService.delete(url);
//  }

}
