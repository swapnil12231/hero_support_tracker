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
  createNewQueue: CreateNewQueue;


  constructor(private queueService: QueueService) {
    let postCallArray = new Array<PostCall>();

    this.createNewQueue = new CreateNewQueue();
    this.createNewQueue.postCallDetails = postCallArray;


    let postCall = new PostCall();
    this.createNewQueue.postCallDetails.push(postCall);
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

}
