import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SoundFileService } from '../../services/sound-file.service';
import { AddSoundComponent } from './add-sound/add-sound.component';

@Component({
  selector: 'app-sound-file',
  templateUrl: './sound-file.component.html',
  styleUrls: ['./sound-file.component.css']
})
export class SoundFileComponent implements OnInit {
 soundFileResponse: any;
   p: any;
   showModal: boolean = false;
  canNewSoundFile: boolean = true;
  soundData: any;
  canShowSoundPopUp: boolean = false;

  domainID=1672730382222;
  @ViewChild(AddSoundComponent)
  addSoundComponent!: AddSoundComponent;

  constructor(private soundFileService: SoundFileService) { }
  ngOnInit(): void {
    this.getAllSoundFile();
  }

  async getAllSoundFile() {
    this.soundFileService.getAllSoundFiles(this.domainID).then(res => {
      if (res) {
        this.soundFileResponse = res;
      }
    }, err => {
      this.soundFileResponse = err;
    })
  }

  async onSoundDelete(row: any) {
    const id = [row.id];
    this.soundFileService.deleteSoundFiles(this.domainID,id).then((res:any) => {
       this.getAllSoundFile();
    }).catch(err=>{
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
    this.soundFileService.playSoundFile(this.domainID, id).then(res => {
      if(res)
      {
        alert(res);
      }
    },err=>{})
  }

  addSoundFileSubmit1() {
    this.getAllSoundFile();
  }

}
