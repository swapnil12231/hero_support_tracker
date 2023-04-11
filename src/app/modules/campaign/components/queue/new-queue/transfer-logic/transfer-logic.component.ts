import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { TransferLogic, VoiceLogic, VoiceLogicEventApi, VoiceLogicEventAssignment, VoiceLogicEventExtension, VoiceLogicEventFollowup, VoiceLogicEventGoToIf, VoiceLogicEventJson, VoiceLogicEventJsonOptions, VoiceLogicEventOption, VoiceLogicEventPlayPrompt, VoiceLogicEventQuestion, VoiceLogicEventRecord, VoiceLogicEventWait } from 'src/app/models/campaign/queue';

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
  eventOptionArray: Array<any> = [
    { id: 0, value: "Abandon", },
    { id: 1, value: "API" },
    { id: 2, value: "Assignment" },
    { id: 3, value: "ExpectedWait" },
    { id: 4, value: "Extension" },
    { id: 5, value: "Followup" },
    { id: 6, value: "GoToIf" },
    { id: 7, value: "Hangup" },
    { id: 8, value: "JSON" },
    { id: 9, value: "MusicOnHold" },
    { id: 10, value: "Option" },
    { id: 11, value: "PlayPrompt" },
    { id: 12, value: "Question" },
    { id: 13, value: "QueueMessage" },
    { id: 14, value: "Record" },
    { id: 15, value: "Wait" }
  ];
  voiceLogicEventJson: VoiceLogicEventJson;
  voiceLogicEventOption: VoiceLogicEventOption;
  voiceLogicEventPlayPrompt: VoiceLogicEventPlayPrompt;
  voiceLogicEventQuestion: VoiceLogicEventQuestion;
  voiceLogicEventRecord: VoiceLogicEventRecord;
  voiceLogicEventWait: VoiceLogicEventWait;
  voiceLogicEventApi: VoiceLogicEventApi;
  voiceLogicEventAssignment: VoiceLogicEventAssignment;
  voiceLogicEventExtension: VoiceLogicEventExtension;
  voiceLogicEventFollowup: VoiceLogicEventFollowup;
  voiceLogicEventGoToIf: VoiceLogicEventGoToIf;


  constructor() {
    this.transferLogicArray = new Array<TransferLogic>();
    this.voiceLogicArray = new Array<VoiceLogic>();
    this.voiceLogicEventOption = new VoiceLogicEventOption();
    this.voiceLogicEventPlayPrompt = new VoiceLogicEventPlayPrompt();
    this.voiceLogicEventQuestion = new VoiceLogicEventQuestion();
    this.voiceLogicEventRecord = new VoiceLogicEventRecord();
    this.voiceLogicEventWait = new VoiceLogicEventWait();
    this.voiceLogicEventApi = new VoiceLogicEventApi();
    this.voiceLogicEventAssignment = new VoiceLogicEventAssignment();
    this.voiceLogicEventExtension = new VoiceLogicEventExtension();
    this.voiceLogicEventFollowup = new VoiceLogicEventFollowup();
    this.voiceLogicEventGoToIf = new VoiceLogicEventGoToIf();

    let transferLogic = new TransferLogic();
    this.transferLogicArray.push(transferLogic);

    let voiceLogic = new VoiceLogic();
    this.voiceLogicArray.push(voiceLogic);

    let voiceLogicEventJson = new VoiceLogicEventJson();
    let voiceLogicEventJsonOption = new VoiceLogicEventJsonOptions();
    let voiceLogicEventJsonOptionArray = new Array<VoiceLogicEventJsonOptions>();
    voiceLogicEventJsonOptionArray.push(voiceLogicEventJsonOption);
    voiceLogicEventJson.voiceLogicEventJsonOptions = voiceLogicEventJsonOptionArray;
    this.voiceLogicEventJson = voiceLogicEventJson;
  }
  addAnotherTransferLogic() {
    let transferLogic = new TransferLogic();
    this.transferLogicArray.push(transferLogic);
  }
  addAnotherVoiceLogic() {
    let voiceLogic = new VoiceLogic();
    this.voiceLogicArray.push(voiceLogic);
  }
  addAnotherVoiceLogicEventJson() {
    let voiceLogicEventJsonOption = new VoiceLogicEventJsonOptions();
    this.voiceLogicEventJson.voiceLogicEventJsonOptions.push(voiceLogicEventJsonOption);
  }
  submit() {
    // this.transferLogicSubmit.emit(this.transferLogicArray);
  }

  ngOnInit(): void {
  }

}
