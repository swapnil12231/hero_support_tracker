import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransferLogic, VoiceLogic } from 'src/app/models/campaign/queue';

@Component({
  selector: 'app-transfer-logic',
  templateUrl: './transfer-logic.component.html',
  styleUrls: ['./transfer-logic.component.css']
})
export class TransferLogicComponent implements OnInit {

  @Output() transferLogicSubmit = new EventEmitter<any>();

  transferLogic!: TransferLogic;
  voiceLogic!: VoiceLogic;

  constructor() {
    this.transferLogic = new TransferLogic();
    this.voiceLogic = new VoiceLogic();
  }

  submit() {
    this.transferLogicSubmit.emit(this.transferLogic);
  }

  ngOnInit(): void {
  }

}
