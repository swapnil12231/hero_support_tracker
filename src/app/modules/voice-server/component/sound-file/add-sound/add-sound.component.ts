import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SoundFileService } from '../../../services/sound-file.service';

@Component({
  selector: 'app-add-sound',
  templateUrl: './add-sound.component.html',
  styleUrls: ['./add-sound.component.css']
})
export class AddSoundComponent implements OnInit {
  @Output() addSoundFileSubmit = new EventEmitter<any>();

  soundName = '';
  file: any;
  fileName: any;
  voiceServerData: any;
  newsoundModalCanShow: boolean = true;
  modalHeaderText = 'Add Sound';
  domainId = '1672730382222';

  constructor(private soundFileService: SoundFileService) { }
  ngOnInit(): void {
  }

  childData(data: any) {debugger
    this.voiceServerData = data;
    this.soundName=this.voiceServerData.data.name;
    this.newsoundModalCanShow = false;
    this.modalHeaderText = 'Edit Sound Files';
  }

  async onUploadSoundFile() {
    this.fileName = this.file.name;
    var Extension = this.fileName.substring(this.fileName.lastIndexOf(".") + 1).toLowerCase();
    if (Extension == 'wav') {
      if (this.file.size <= 5000000) {
        var formData = new FormData();
        formData.append("file", this.file);
        formData.append('name', this.soundName);
        formData.append('domainId', this.domainId);
        if (this.voiceServerData) {
          this.soundFileService.editSoundFile(formData, this.voiceServerData.data.id).then((res: any) => {
            console.log(res);
            this.addSoundFileSubmit.emit();
            this.reset()
          }, err => {
            console.log(err);
            this.addSoundFileSubmit.emit();
          })
        } else {
          this.soundFileService.addSoundFile(formData).then((res: any) => {
            this.addSoundFileSubmit.emit();
            this.reset();
          }, err => {
            this.addSoundFileSubmit.emit();
          })
        }
      } else {
        alert("maximum size is 5MB");
      }
    } else {
      alert("Please upload .Wav file");
    }
  }

  soundFileUpload(element: any) {
    this.file = element.target.files[0];
    this.fileName = this.file.name;
  };

  reset() {debugger
    this.voiceServerData = null;
    this.modalHeaderText = 'Add Sound';
    this.soundName='';
    console.log(this.soundName)
  }
}


