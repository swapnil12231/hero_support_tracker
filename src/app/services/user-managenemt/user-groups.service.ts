import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientService } from '../authentication/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class 

UserGroupsService {

  constructor(
    private httpClientService:HttpClientService
  ) { }


   async getAllUserGroups(domainId:any)
   {
        let url=`/usermanagement/usergroup/?domainid=${domainId}`;
        return this.httpClientService.get(url);
   }
}