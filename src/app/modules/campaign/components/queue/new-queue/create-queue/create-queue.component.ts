import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreateNewQueue, CreateQueue, PostCall } from 'src/app/models/campaign/queue';
import { QueueService } from 'src/app/modules/campaign/services/queue.service';

@Component({
  selector: 'app-create-queue',
  templateUrl: './create-queue.component.html',
  styleUrls: ['./create-queue.component.css']
})
export class CreateQueueComponent implements OnInit {


  @Output() createQueueSubmit = new EventEmitter<CreateNewQueue>();

  @Input()
  campaignsArray: Array<any> = [];
  @Input()
  musicClassArray: Array<any> = [];
  @Input()
  apiOptionArray: Array<any> = [];
  @Input()
  ivrOptionArray: Array<any> = [];
  @Input()
  dispositionTypeOptionArray: Array<any> = [];

  dispositionOptionArray: Array<any> = [];
  queuePriorityArray: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  enablePostCall: boolean = false;
  createNewQueue: CreateNewQueue;


  constructor(private queueService: QueueService) {
    let createQueue = new CreateQueue();
    let postCallArray = new Array<PostCall>();

    this.createNewQueue = new CreateNewQueue();
    this.createNewQueue.queue = createQueue;
    this.createNewQueue.postCallArray = postCallArray;


    let postCall = new PostCall();
    this.createNewQueue.postCallArray.push(postCall);
  }

  addAnotherPostCall() {
    let postCall = new PostCall();
    this.createNewQueue.postCallArray.push(postCall);
  }
  onDispositionTypeChange(index: number) {
    let data = {
      campId: this.createNewQueue.queue.campaign,
      dispoType: this.createNewQueue.postCallArray[index].type.join()
    }
    this.queueService.getDispositionData(data).then((res: any) => {
      this.createNewQueue.postCallArray[index].dispositionOptionArray = res;
    });

  }
  submit() {

    this.createQueueSubmit.emit(this.createNewQueue)
  }


  ngOnInit(): void {
  }

}
