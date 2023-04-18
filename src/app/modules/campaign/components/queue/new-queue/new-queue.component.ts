import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { QueueService } from '../../../services/queue.service';
import { CreateNewQueue } from 'src/app/models/campaign/queue';
import { Constants } from 'src/app/models/constants';
import { ToastService } from 'src/app/services/common/toast.service';
import { CreateQueueComponent } from './create-queue/create-queue.component';
import { TransferLogicComponent } from './transfer-logic/transfer-logic.component';

@Component({
  selector: 'app-new-queue',
  templateUrl: './new-queue.component.html',
  styleUrls: ['./new-queue.component.css']
})
export class NewQueueComponent implements OnInit {

  @Output()
  refreshQueue = new EventEmitter<void>();

  @ViewChild(CreateQueueComponent)
  createQueueComponent!: CreateQueueComponent;

  @ViewChild(TransferLogicComponent)
  transferLogicComponent!: TransferLogicComponent;

  createNewQueue!: CreateNewQueue;
  campaignId: number = 0;
  domainId: number;

  constructor(private queueService: QueueService, private toastService: ToastService) {
    this.domainId = parseInt(sessionStorage.getItem(Constants.domainId) || '0');
    this.getQueueDropdownsData();
  }

  getQueueDropdownsData() {
    this.queueService.getQueueDropdownsData().then((res: any) => {
      if (res) {
        this.createQueueComponent.campaignsArray = Object.keys(res.campaignOption).map((e: any) => ({ id: e, value: res.campaignOption[e] }));

        let musicClassArray = Object.keys(res.musicClassOption).map((e: any) => ({ id: e, value: res.musicClassOption[e] }));

        this.createQueueComponent.musicClassArray = musicClassArray;
        this.transferLogicComponent.musicClassOptionArray = musicClassArray;

        let apiOptionArray = Object.keys(res.apiOption).map((e: any) => ({ id: e, value: res.apiOption[e] }));
        this.createQueueComponent.apiOptionArray = apiOptionArray;
        this.transferLogicComponent.apiOptionArray = apiOptionArray;

        this.createQueueComponent.ivrOptionArray = Object.keys(res.ivrOption).map((e: any) => ({ id: e, value: res.ivrOption[e] }));

        this.transferLogicComponent.soundFilesOptionArray = Object.keys(res.soundFilesOption).map((e: any) => ({ id: e, value: res.soundFilesOption[e] }));
        this.transferLogicComponent.skillOptionArray = Object.keys(res.transferSkillOption).map((e: any) => ({ id: e, value: res.transferSkillOption[e] }));

        let dispositionTypeOptionArray = Object.keys(res.dispositionTypeOption).map((e: any) => ({ campId: e, values: res.dispositionTypeOption[e].map((e: any) => ({ name: e })) }));
        this.createQueueComponent.dispositionTypeOptionArray = dispositionTypeOptionArray;
        this.transferLogicComponent.dispositionTypeOptionArray = dispositionTypeOptionArray;
      }

    });
  }
  createQueueSubmit(createNewQueue: CreateNewQueue) {
    this.createNewQueue = createNewQueue;
    this.transferLogicComponent.campaignId = createNewQueue.campid;
  }

  createQueueNextSubmit(data: any) {
    let createNewQueueObj: any = {};
    createNewQueueObj = this.createNewQueue;
    createNewQueueObj.postCallDetails = this.createNewQueue.postCallDetails.map(e => ({ ...e, dispoId: e.dispoId.flatMap(dispo => dispo.id) }));
    createNewQueueObj = { ...data, ...createNewQueueObj, domainid: this.domainId };
    createNewQueueObj.postCall = createNewQueueObj.postCall ? "Y" : "N";

    this.queueService.createQueue(createNewQueueObj).then(res => {
      setTimeout(() => {
        this.refreshQueue.emit();
      }, 500);
      this.toastService.showSuccess("Queue created successfully", "Success");
    }).catch(error => {
      this.toastService.showError("Something went wrong", "Error");
    });

  }

  ngOnInit(): void {
  }

}
