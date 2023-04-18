import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { QueueService } from '../../../services/queue.service';
import { CreateNewQueue } from 'src/app/models/campaign/queue';
import { Constants } from 'src/app/models/constants';
import { ToastService } from 'src/app/services/common/toast.service';

@Component({
  selector: 'app-new-queue',
  templateUrl: './new-queue.component.html',
  styleUrls: ['./new-queue.component.css']
})
export class NewQueueComponent implements OnInit {

  @Output()
  refreshQueue = new EventEmitter<void>();

  campaignsArray: Array<any> = [];
  musicClassArray: Array<any> = [];
  apiOptionArray: Array<any> = [];
  ivrOptionArray: Array<any> = [];
  dispositionTypeOptionArray: Array<any> = [];
  skillOptionArray: Array<any> = [];
  soundFilesOptionArray: Array<any> = [];
  selectedCampaignId!: number;
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
        this.campaignsArray = Object.keys(res.campaignOption).map((e: any) => ({ id: e, value: res.campaignOption[e] }));
        this.musicClassArray = Object.keys(res.musicClassOption).map((e: any) => ({ id: e, value: res.musicClassOption[e] }));
        this.apiOptionArray = Object.keys(res.apiOption).map((e: any) => ({ id: e, value: res.apiOption[e] }));
        this.ivrOptionArray = Object.keys(res.ivrOption).map((e: any) => ({ id: e, value: res.ivrOption[e] }));
        this.soundFilesOptionArray = Object.keys(res.soundFilesOption).map((e: any) => ({ id: e, value: res.soundFilesOption[e] }));
        this.skillOptionArray = Object.keys(res.transferSkillOption).map((e: any) => ({ id: e, value: res.transferSkillOption[e] }));
        this.dispositionTypeOptionArray = Object.keys(res.dispositionTypeOption).map((e: any) => ({ campId: e, values: res.dispositionTypeOption[e].map((e: any) => ({ name: e })) }));
      }

    });
  }
  createQueueSubmit(createNewQueue: CreateNewQueue) {
    this.createNewQueue = createNewQueue;
    this.campaignId = createNewQueue.campid;
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
