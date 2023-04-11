

import { Injectable } from '@angular/core';
import { HttpClientService } from '../authentication/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class SkillSetService {

  constructor(
    private  httpClientService: HttpClientService

  ) { }



  async getAllSkillSet(domainId:any)
   {
        let url=`/usermanagement/skills/?domainid=${domainId}`;
        
        return this.httpClientService.get(url);
   } 



   async createSkillSet(data:any)
   {
    let url=`/usermanagement/skills/`;
    return this.httpClientService.post(url, data)
  }
}
