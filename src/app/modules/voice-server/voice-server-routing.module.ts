import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { rootNavigationRoutes } from 'src/app/constants/navigation-routes.constants';
import { MainComponent } from './component/main/main.component';
import { MusicOnHoldComponent } from './component/music-on-hold/music-on-hold.component';
import { RecordingComponent } from './component/recording/recording.component';
import { SoundFileComponent } from './component/sound-file/sound-file.component';
import { TrunkComponent } from './component/trunk/trunk.component';
import { VoiceServerComponent } from './component/voice-server/voice-server.component';

const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: rootNavigationRoutes.soundFile, pathMatch: 'full', },
      { path: rootNavigationRoutes.soundFile, component: SoundFileComponent },
      { path: rootNavigationRoutes.musicOnHold, component: MusicOnHoldComponent },
      { path: rootNavigationRoutes.trunk, component: TrunkComponent },
      { path: rootNavigationRoutes.voiceServers, component: VoiceServerComponent },
      { path: rootNavigationRoutes.recording, component: RecordingComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoiceServerRoutingModule { }