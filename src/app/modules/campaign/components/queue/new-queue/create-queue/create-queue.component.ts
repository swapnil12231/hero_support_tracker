import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreateQueue, PostCall } from 'src/app/models/campaign/queue';
import { QueueService } from 'src/app/modules/campaign/services/queue.service';

@Component({
  selector: 'app-create-queue',
  templateUrl: './create-queue.component.html',
  styleUrls: ['./create-queue.component.css']
})
export class CreateQueueComponent implements OnInit {


  @Output() createQueueSubmit = new EventEmitter<any>();

  @Input()
  campaignsArray: Array<any> = [];
  @Input()
  musicClassArray: Array<any> = [];
  @Input()
  apiOptionArray: Array<any> = [];
  @Input()
  ivrOptionArray: Array<any> = [];
  @Input()
  dispositionOptionArray: Array<any> = [];

  queuePriorityArray: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  enablePostCall: boolean = false;
  createQueue: CreateQueue;
  postCallArray: Array<PostCall>;


  constructor(private queueService: QueueService) {

    this.createQueue = new CreateQueue();
    this.postCallArray = new Array<PostCall>();

    let postCall = new PostCall();
    this.postCallArray.push(postCall);
  }

  addAnotherPostCall() {
    let postCall = new PostCall();
    this.postCallArray.push(postCall);
  }

  submit() {
    this.createQueueSubmit.emit(this.createQueue)
  }


  ngOnInit(): void {
  }

}
