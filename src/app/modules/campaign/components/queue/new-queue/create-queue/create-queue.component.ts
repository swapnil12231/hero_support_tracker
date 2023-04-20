import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreateNewQueue, PostCall } from 'src/app/models/campaign/queue';
import { QueueService } from 'src/app/modules/campaign/services/queue.service';

@Component({
  selector: 'app-create-queue',
  templateUrl: './create-queue.component.html',
  styleUrls: ['./create-queue.component.css']
})
export class CreateQueueComponent implements OnInit {


  @Output() createQueueSubmit = new EventEmitter<CreateNewQueue>();


  campaignsArray: Array<any> = [];
  musicClassArray: Array<any> = [];
  apiOptionArray: Array<any> = [];
  ivrOptionArray: Array<any> = [];
  dispositionTypeOptionArray: Array<any> = [];
  dispositionOptionArray: Array<any> = [];
  queuePriorityArray: Array<any> = [];
  createNewQueue: CreateNewQueue;


  constructor(private queueService: QueueService) {
    let postCallArray = new Array<PostCall>();

    this.createNewQueue = new CreateNewQueue();
    this.createNewQueue.postCallDetails = postCallArray;


    let postCall = new PostCall();
    this.createNewQueue.postCallDetails.push(postCall);
    this.queuePriorityArray = this.getQueuePriorityData();
  }

  addAnotherPostCall() {
    let postCall = new PostCall();
    this.createNewQueue.postCallDetails.push(postCall);
  }
  onDispositionTypeChange(index: number) {
    let data = {
      campId: this.createNewQueue.campid,
      dispoType: this.createNewQueue.postCallDetails[index].type.join()
    }
    this.queueService.getDispositionData(data).then((res: any) => {
      this.createNewQueue.postCallDetails[index].dispositionOptionArray = res;
    });

  }
  submit() {
    this.createQueueSubmit.emit(this.createNewQueue)
  }

  ngOnInit(): void {
  }

  getQueuePriorityData() {
    return [
      { id: 0, value: "0" },
      { id: 1, value: "1" },
      { id: 2, value: "2" },
      { id: 3, value: "3" },
      { id: 4, value: "4" },
      { id: 5, value: "5" },
      { id: 6, value: "6" },
      { id: 7, value: "7" },
      { id: 8, value: "8" },
      { id: 9, value: "9" }
    ];
  }
}
