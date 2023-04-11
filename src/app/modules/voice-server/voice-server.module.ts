import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoiceServerRoutingModule } from './voice-server-routing.module';
import { SoundFileComponent } from './component/sound-file/sound-file.component';
import { MusicOnHoldComponent } from './component/music-on-hold/music-on-hold.component';
import { TrunkComponent } from './component/trunk/trunk.component';
import { VoiceServerComponent } from './component/voice-server/voice-server.component';
import { RecordingComponent } from './component/recording/recording.component';
import { AddSoundComponent } from './component/sound-file/add-sound/add-sound.component';
import { CreateMusicOnHoldComponent } from './component/music-on-hold/create-music-on-hold/create-music-on-hold.component';
import { CreateVoiceRecordingComponent } from './component/recording/create-voice-recording/create-voice-recording.component';
import { MainComponent } from './component/main/main.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SoundFileComponent,
    MusicOnHoldComponent,
    TrunkComponent,
    VoiceServerComponent,
    RecordingComponent,
    AddSoundComponent,
    CreateMusicOnHoldComponent,
    CreateVoiceRecordingComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    VoiceServerRoutingModule,
    NgxPaginationModule,
    FormsModule

  ]
})
export class VoiceServerModule { }
