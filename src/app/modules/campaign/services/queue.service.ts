import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/services/authentication/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  constructor(private httpClientService: HttpClientService) { }

  async getQueueData() {
    let domainId = 1672730382222;
    let url = `/campaign/queue/?domainId=${domainId}`;
    return this.httpClientService.get(url);
  }
  async getQueueDropdownsData() {
    let domainId = 1672730382222;
    let url = `/campaign/queue/get-entity?domainId=${domainId}`;
    return this.httpClientService.get(url);
  }
}
