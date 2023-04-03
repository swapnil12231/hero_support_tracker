import { Component, OnInit } from '@angular/core';
import { QueueService } from '../../services/queue.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {
  queueData: Array<any> = [];
  constructor(private queueService: QueueService) {
    this.getQueueData();
  }
  ngOnInit(): void {
  }

  getQueueData() {
    this.queueService.getQueueData().then((res: any) => {
      this.queueData = res;
    });
  }
}
