import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/services/authentication/httpclient.service';


@Injectable({
  providedIn: 'root'
})
export class SoundFileService {

  constructor(private httpClientService: HttpClientService, private httpClient: HttpClient) { }

  async getAllSoundFiles(domainId: any) {
    let url = `/voice-server/sound-files/?domainId=${domainId}`;
    return this.httpClientService.get(url);
  }

  async addSoundFile(formData: any) {
    let url = `/voice-server/sound-files/`;
    return this.httpClientService.postWithFormData(url, formData);
  }

  async deleteSoundFiles(domainId: any, data: any) {
    let url = `/voice-server/sound-files/?domainId=${domainId}`;
    return this.httpClientService.delete(url, data);
  }

  async editSoundFile(formData: any, id: any) {
    let url = `/voice-server/sound-files/${id}`;
    return this.httpClientService.put(url, formData);
  }

  async playSoundFile(id: any, domainId: any) {
    let url = `/voice-server/sound-files/playfile/${id}?domainId=${domainId}`;
    return this.httpClientService.get(url);
  }
}
