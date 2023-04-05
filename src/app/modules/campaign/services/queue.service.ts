import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/services/authentication/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  constructor(private httpClientService: HttpClientService) { }
  domainId = 1672730382222;

  async getQueueData() {
    let url = `/campaign/queue/?domainId=${this.domainId}`;
    return this.httpClientService.get(url);
  }
  async getQueueDropdownsData() {
    let url = `/campaign/queue/get-entity?domainId=${this.domainId}`;
    return this.httpClientService.get(url);
  }
  async getDispositionData(campId: number) {
    let url = `/campaign/queue/disposition-on-camp?domainId=${this.domainId}&campId=${campId}`;
    return this.httpClientService.get(url);
  }
}
