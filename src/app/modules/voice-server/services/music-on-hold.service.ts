import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/services/authentication/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class MusicOnHoldService {

  constructor(private  httpClientService: HttpClientService) { }

  getMusicOnHoldData(){
    let url=``;
    return this.httpClientService.get(url);


  }
}
