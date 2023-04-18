import { Component, OnInit } from '@angular/core';
import { QueueService } from '../../services/queue.service';
import { ToastService } from 'src/app/services/common/toast.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {
  queueData: Array<any> = [];
  constructor(private queueService: QueueService, private toastService: ToastService) {
    this.getQueueData();
  }
  ngOnInit(): void {
  }

  getQueueData() {
    this.queueService.getQueueData().then((res: any) => {
      this.queueData = res;
    });
  }
  deleteQueue(queueId: number) {
    this.queueService.deleteQueue(queueId).then(res => {
      setTimeout(() => {
        this.getQueueData();
      }, 500);
      this.toastService.showSuccess("Queue deleted successfully", "Success");
    }).catch(error => {
      this.toastService.showError("Something went wrong", "Error");
    });
  }

}
