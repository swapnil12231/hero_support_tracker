import { Injectable } from '@angular/core';
import { HttpClientService } from '../authentication/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private  httpClientService: HttpClientService

  ) { }



  async getAllSkillSet(domainId:any)
   {
        let url=`/user/users/?domainid=${domainId}`;        
        return this.httpClientService.get(url);
   }


   async createSameUser(data:any)
   {
    let url=`/user/users/`;        
    return this.httpClientService.post(url, data)
   }
}
