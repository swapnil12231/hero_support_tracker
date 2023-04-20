import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { TransferLogic, VoiceLogic, VoiceLogicEventApi, VoiceLogicEventAssignment, VoiceLogicEventExtension, VoiceLogicEventFollowup, VoiceLogicEventGoToIf, VoiceLogicEventJson, VoiceLogicEventJsonOptions, VoiceLogicEventMusic, VoiceLogicEventOption, VoiceLogicEventPlayPrompt, VoiceLogicEventQuestion, VoiceLogicEventRecord, VoiceLogicEventWait } from 'src/app/models/campaign/queue';
import { QueueService } from 'src/app/modules/campaign/services/queue.service';

@Component({
  selector: 'app-transfer-logic',
  templateUrl: './transfer-logic.component.html',
  styleUrls: ['./transfer-logic.component.css']
})
export class TransferLogicComponent implements OnInit {

  @Output() createQueueNextSubmit = new EventEmitter<any>();


  skillOptionArray: Array<any> = [];
  soundFilesOptionArray: Array<any> = [];
  musicClassOptionArray: Array<any> = [];
  dispositionTypeOptionArray: Array<any> = [];
  campaignId: number = 0;
  apiOptionArray: Array<any> = [];
  transferLogicArray: Array<TransferLogic>;
  voiceLogicArray: Array<VoiceLogic>;
  transferTypeOptionArray: Array<any> = [];
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
  reqResTypeOptionArray: Array<any> = [];
  operationTypeOptionArray: Array<any> = [];
  functionTypeOptionArray: Array<any> = [];
  conditionTypeOptionArray: Array<any> = [];

  constructor(private queueService: QueueService) {
    this.transferLogicArray = new Array<TransferLogic>();
    this.voiceLogicArray = new Array<VoiceLogic>();

    let transferLogic = new TransferLogic();
    this.transferLogicArray.push(transferLogic);

    let voiceLogic = new VoiceLogic();
    this.voiceLogicArray.push(voiceLogic);
    this.transferTypeOptionArray = this.getTransferTypeData();
    this.reqResTypeOptionArray = this.getRequestResponseTypeData();
    this.operationTypeOptionArray = this.getOperationTypeData();
    this.functionTypeOptionArray = this.getFunctionTypeData();
    this.conditionTypeOptionArray = this.getConditionTypeData();
  }
  addAnotherTransferLogic() {
    let transferLogic = new TransferLogic();
    this.transferLogicArray.push(transferLogic);
  }
  addAnotherVoiceLogic() {
    let voiceLogic = new VoiceLogic();
    this.voiceLogicArray.push(voiceLogic);
  }
  onMusicClassChange(index: number) {
    this.voiceLogicArray[index].data.music_class_name = this.musicClassOptionArray.find(e => e.id == this.voiceLogicArray[index].data.music_class).value;
  }
  onEventChange(index: number) {
    if (this.voiceLogicArray[index].event == 1) {
      let voiceLogicEventApi = new VoiceLogicEventApi();
      this.voiceLogicArray[index].data = voiceLogicEventApi;
    }
    else if (this.voiceLogicArray[index].event == 2) {
      let voiceLogicEventAssignment = new VoiceLogicEventAssignment();
      this.voiceLogicArray[index].data = voiceLogicEventAssignment;
    }
    else if (this.voiceLogicArray[index].event == 4) {
      let voiceLogicEventExtension = new VoiceLogicEventExtension();
      this.voiceLogicArray[index].data = voiceLogicEventExtension;
    }
    else if (this.voiceLogicArray[index].event == 5) {
      let voiceLogicEventFollowup = new VoiceLogicEventFollowup();
      this.voiceLogicArray[index].data = voiceLogicEventFollowup;
    }
    else if (this.voiceLogicArray[index].event == 6) {
      let voiceLogicEventGoToIf = new VoiceLogicEventGoToIf();
      this.voiceLogicArray[index].data = voiceLogicEventGoToIf;
    }
    else if (this.voiceLogicArray[index].event == 8) {
      let voiceLogicEventJson = new VoiceLogicEventJson();

      let voiceLogicEventJsonOptionArray = new Array<VoiceLogicEventJsonOptions>();
      let voiceLogicEventJsonOption = new VoiceLogicEventJsonOptions();
      voiceLogicEventJsonOptionArray.push(voiceLogicEventJsonOption);
      voiceLogicEventJson.voiceLogicEventJsonOptions = voiceLogicEventJsonOptionArray;

      this.voiceLogicArray[index].data = voiceLogicEventJson;
    }
    else if (this.voiceLogicArray[index].event == 9) {
      let voiceLogicEventMusic = new VoiceLogicEventMusic();
      this.voiceLogicArray[index].data = voiceLogicEventMusic;
    }
    else if (this.voiceLogicArray[index].event == 10) {
      let voiceLogicEventOption = new VoiceLogicEventOption();
      this.voiceLogicArray[index].data = voiceLogicEventOption;
    }
    else if (this.voiceLogicArray[index].event == 11) {
      let voiceLogicEventPlayPrompt = new VoiceLogicEventPlayPrompt();
      this.voiceLogicArray[index].data = voiceLogicEventPlayPrompt;
    }
    else if (this.voiceLogicArray[index].event == 12) {
      let voiceLogicEventQuestion = new VoiceLogicEventQuestion();
      this.voiceLogicArray[index].data = voiceLogicEventQuestion;
    }
    else if (this.voiceLogicArray[index].event == 14) {
      let voiceLogicEventRecord = new VoiceLogicEventRecord();
      this.voiceLogicArray[index].data = voiceLogicEventRecord;
    }
    else if (this.voiceLogicArray[index].event == 15) {
      let voiceLogicEventWait = new VoiceLogicEventWait();
      this.voiceLogicArray[index].data = voiceLogicEventWait;
    }
    else {
      this.voiceLogicArray[index].data = null;
    }

  }
  addAnotherVoiceLogicEventJson(index: number) {

    let voiceLogicEventJsonOption = new VoiceLogicEventJsonOptions();
    this.voiceLogicArray[index].data.voiceLogicEventJsonOptions.push(voiceLogicEventJsonOption);
  }
  onDispositionTypeChange(index: number) {
    let data = {
      campId: this.campaignId,
      dispoType: this.voiceLogicArray[index].data.disposition_type
    }
    this.queueService.getDispositionData(data).then((res: any) => {
      this.voiceLogicArray[index].data.dispositionOptionArray = res;
    });
  }
  submit() {
    let transferObj: any = {};
    this.transferLogicArray = this.transferLogicArray.map((e, index) => ({ ...e, step: index + 1 }));
    let steps: any = {};
    let voiceLogicObject = this.voiceLogicArray.map(e => {
      let tempObj: any = {};
      tempObj.event = this.eventOptionArray[e.event].value;
      tempObj.data = e.data;
      if (e.event == 5) {
        let followUpObj: any = {};
        let time = new Date(e.data.time);
        followUpObj.hour = time.getHours();
        followUpObj.minutes = time.getMinutes();

        tempObj.data = followUpObj;
      }
      else if (e.event == 8) {
        let parseObj: any = {};
        e.data.voiceLogicEventJsonOptions.forEach((json: VoiceLogicEventJsonOptions) => parseObj[json.key] = json.name);
        tempObj.data.parse = parseObj;
      }
      else if (e.event == 14) {
        e.data.dispositionOptionArray = undefined;
      }
      else {
        tempObj.data = e.data;
      }
      return tempObj;
    }).forEach((q, i) => {
      steps[i + 1] = q;
    });
    let stepData = {
      steps: steps
    }

    transferObj.queueTransferDetails = this.transferLogicArray;
    transferObj.queueVoiceDetails = [JSON.stringify(stepData)];

    this.createQueueNextSubmit.emit(transferObj);
  }
  getTransferTypeData() {
    return [
      { id: 1, value: 'AGENT' },
      { id: 2, value: 'SKILL' },
      { id: 3, value: 'HANGUP' },
      { id: 4, value: 'OVERFLOW' },
      { id: 5, value: 'EXTERNAL' }
    ];
  }
  getRequestResponseTypeData() {
    return [
      { id: 1, value: "TEXT" },
      { id: 2, value: "JSON" },
      { id: 3, value: "XML" }
    ];
  }
  getOperationTypeData() {
    return [
      { id: 1, value: "append" },
      { id: 2, value: "assignment" },
      { id: 3, value: "decrement" },
      { id: 4, value: "increment" }
    ];
  }
  getFunctionTypeData() {
    return [
      { id: 1, value: "clear()" },
      { id: 2, value: "getData(x)" },
      { id: 3, value: "getData(x,y)" },
      { id: 4, value: "length()" },
      { id: 5, value: "toLower()" },
      { id: 6, value: "toUpper()" },
      { id: 7, value: "split(symbol)" }
    ];
  }

  getConditionTypeData() {
    return [
      { id: 1, value: "eq" },
      { id: 2, value: "eq-ignore-case" },
      { id: 3, value: "gt" },
      { id: 4, value: "lt" },
      { id: 5, value: "not-eq" },
      { id: 6, value: "lt-eq" },
      { id: 7, value: "gt-eq" },
      { id: 8, value: "contains" },
      { id: 9, value: "not-contains" },
      { id: 10, value: "starts-with" },
      { id: 11, value: "is-blank" },
      { id: 12, value: "is-null" }
    ];
  }
  ngOnInit(): void {
  }

}
