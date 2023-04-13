import { Injectable } from '@angular/core';
import { Constants } from 'src/app/models/constants';
import { HttpClientService } from 'src/app/services/authentication/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  domainId: number;
  constructor(private httpClientService: HttpClientService) {
    this.domainId = parseInt(sessionStorage.getItem(Constants.domainId) || '0');
  }

  async getQueueData() {
    let url = `/campaign/queue/?domainId=${this.domainId}`;
    return this.httpClientService.get(url);
  }
  async getQueueDropdownsData() {
    let url = `/campaign/queue/get-entity?domainId=${this.domainId}`;
    return this.httpClientService.get(url);
  }
  async getDispositionData(data: any) {
    let url = `/campaign/queue/disposition-on-camp?domainId=${this.domainId}&campId=${data.campId}&dispoType=${data.dispoType}`;
    return this.httpClientService.get(url);
  }
  async deleteQueue(queueId: number) {
    let url = `/campaign/queue/${queueId}`;
    this.httpClientService.delete(url);
  }

  async createQueue(data: any) {
    let url = `/campaign/queue/`;
    this.httpClientService.post(url, data);
  }
}
