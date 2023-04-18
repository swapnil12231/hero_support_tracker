import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/models/constants';
import { HttpClientService } from 'src/app/services/authentication/httpclient.service';


@Injectable({
  providedIn: 'root'
})
export class SoundFileService {
  domainId:number;

  constructor(private  httpClientService: HttpClientService,private httpClient: HttpClient) { 
    this.domainId = parseInt(sessionStorage.getItem(Constants.domainId) || '0');

  }

  async getAllSoundFiles()
  {
       let url=`/voice-server/sound-files/?domainId=${this.domainId}`;
       return this.httpClientService.get(url);
  }  
  
  async addSoundFile(formData:any){
    let url=`/voice-server/sound-files/`;
    return this.httpClientService.postWithFormData(url,formData);
  }

  async deleteSoundFiles(data:any){
    let url=`/voice-server/sound-files/?domainId=${this.domainId}`;
    return this.httpClientService.deleteWithBody(url,data);
  }

  async editSoundFile(formData:any,id:any){
    let url=`/voice-server/sound-files/${id}`;
    return this.httpClientService.put(url,formData);
  }

  async playSoundFile(id:any)
  {
    let url=`/voice-server/sound-files/playfile/${id}?domainId=${this.domainId}`;
    return this.httpClientService.get(url);
  }
}
