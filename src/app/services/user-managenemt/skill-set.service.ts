

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

        console.log({url});
        
        return this.httpClientService.get(url);
   }
}
