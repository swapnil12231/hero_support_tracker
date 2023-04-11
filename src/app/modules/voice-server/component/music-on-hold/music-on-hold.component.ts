import { Component, OnInit } from '@angular/core';
import { MusicOnHoldService } from '../../services/music-on-hold.service';

@Component({
  selector: 'app-music-on-hold',
  templateUrl: './music-on-hold.component.html',
  styleUrls: ['./music-on-hold.component.css']
})
export class MusicOnHoldComponent implements OnInit {

  // constructor(private musicOnHoldService:MusicOnHoldService) { }
  constructor(){}

  ngOnInit(): void {
    this.getMusicOnHold();
  }


  async getMusicOnHold(){



  }

}
