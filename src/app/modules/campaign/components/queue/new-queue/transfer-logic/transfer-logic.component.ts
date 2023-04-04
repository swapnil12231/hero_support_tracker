import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { TransferLogic, VoiceLogic } from 'src/app/models/campaign/queue';

@Component({
  selector: 'app-transfer-logic',
  templateUrl: './transfer-logic.component.html',
  styleUrls: ['./transfer-logic.component.css']
})
export class TransferLogicComponent implements OnInit {

  @Output() transferLogicSubmit = new EventEmitter<any>();

  @Input()
  skillOptionArray: Array<any> = [];

  transferLogicArray: Array<TransferLogic>;
  voiceLogicArray: Array<VoiceLogic>;
  transferTypeOptionArray: Array<string> = ['AGENT', 'SKILL', 'HANGUP', 'OVERFLOW', 'EXTERNAL'];
  eventOptionArray: Array<string> = ['Abandon', 'API', 'Assignment', 'ExpectedWait', 'Extension', 'Followup', 'GoToIf', 'Hangup', 'JSON', 'MusicOnHold', 'Option', 'PlayPrompt', 'Question', 'QueueMessage', 'Record', 'Wait'];

  constructor() {
    this.transferLogicArray = new Array<TransferLogic>();
    this.voiceLogicArray = new Array<VoiceLogic>();
    let transferLogic = new TransferLogic();
    let voiceLogic = new VoiceLogic();

    this.transferLogicArray.push(transferLogic);
    this.voiceLogicArray.push(voiceLogic);
  }
  addAnotherTransferLogic() {
    let transferLogic = new TransferLogic();
    this.transferLogicArray.push(transferLogic);
  }
  addAnotherVoiceLogic() {
    let voiceLogic = new VoiceLogic();
    this.voiceLogicArray.push(voiceLogic);
  }
  submit() {
    // this.transferLogicSubmit.emit(this.transferLogicArray);
  }

  ngOnInit(): void {
  }

}
