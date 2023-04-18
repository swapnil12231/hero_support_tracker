import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ToastService } from 'src/app/services/common/toast.service';
import { SoundFileService } from '../../services/sound-file.service';
import { AddSoundComponent } from './add-sound/add-sound.component';
@Component({
  selector: 'app-sound-file',
  templateUrl: './sound-file.component.html',
  styleUrls: ['./sound-file.component.css']
})
export class SoundFileComponent implements OnInit {
  soundFileResponse: any;
  showModal: boolean = false;
  canNewSoundFile: boolean = true;
  soundData: any;
  canShowSoundPopUp: boolean = false;
  base64ResponseData: any;
  audioSource = '';

  @ViewChild(AddSoundComponent)
  addSoundComponent!: AddSoundComponent;
  constructor(private soundFileService: SoundFileService,private toastService:ToastService) { }
  ngOnInit(): void {
    this.getAllSoundFile();
  }

  async getAllSoundFile() {
    this.soundFileService.getAllSoundFiles().then(res => {
      if (res) {
        this.soundFileResponse = res;
      }
    }, err => {
      this.soundFileResponse = err;
    })
  }

  async onSoundDelete(row: any) {
    const id = [row.id];
    this.soundFileService.deleteSoundFiles(id).then((res: any) => {
      this.getAllSoundFile();
      this.toastService.showSuccess(res,'Success');
    }).catch(err => {
      this.getAllSoundFile();
    })
  }

  onSoundEdit(row: any) {
    this.canNewSoundFile = false;
    this.soundData = {
      'data': row,
      'canShowUpdate': true,
      'canNewSoundFile': this.canNewSoundFile
    }
    this.addSoundComponent.childData(this.soundData);
  }

  onSoundPlay(row: any) {
    const id = [row.id];
    this.soundFileService.playSoundFile(id).then(res => {
      if (res) {
        console.log(res);
        this.base64ResponseData = res;
      }
    }, err => {

    })
  }

  loadAudioClick() {
    let binary = this.convertDataURIToBinary(this.base64ResponseData);
    let blob = new Blob([binary], { type: 'audio/ogg' });
    let blobUrl = URL.createObjectURL(blob);
    this.audioSource = blobUrl;
    // this.audioTag.nativeElement.setAttribute('src',this.audioSource);
  }

  convertDataURIToBinary(data: any) {
    let BASE64_MARKER = ';base64,';
    let base64Index = data.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    let base64 = data.substring(base64Index);
    let raw = window.atob(base64);
    let rawLength = raw.length;
    let array = new Uint8Array(new ArrayBuffer(rawLength));

    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }

  addSoundFileSubmit1() {
    this.getAllSoundFile();
  }
}
