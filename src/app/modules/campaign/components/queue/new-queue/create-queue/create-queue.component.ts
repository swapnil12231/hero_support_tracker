import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CreateQueue, PostCall } from 'src/app/models/campaign/queue';

@Component({
  selector: 'app-create-queue',
  templateUrl: './create-queue.component.html',
  styleUrls: ['./create-queue.component.css']
})
export class CreateQueueComponent implements OnInit {


  @Output() createQueueSubmit = new EventEmitter<any>();


  createQueue!: CreateQueue;
  postCall!: PostCall;


  constructor() {
    this.createQueue = new CreateQueue();
    this.postCall = new PostCall();
  }


  submit() {


    this.createQueueSubmit.emit(this.createQueue)
  }

  ngOnInit(): void {
  }

}
