import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { newCampaign } from 'src/app/models/campaign/campaignDisposition';
import { CreateCampaigns } from 'src/app/models/campaign/campaigns';
import { Constants } from 'src/app/models/constants';
import { CampaignsService } from 'src/app/modules/campaign/services/campaigns.service';
// import { ToastModule } from 'primeng/toast';
// import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {
  // @Output() hideCreateCampaignPopup = new EventEmitter<boolean>();
  @Output() createCampaignSubmit = new EventEmitter<any>();
  editCampaignObj!: newCampaign;
  createCampaign!: CreateCampaigns;
  campaignsData: any = [];
  crmData: any;
  isAutodispose: boolean = false;
  editable: boolean = true;
  startCallCrmData: any;
  startCallUrl: any;
  modalHeaderText = 'Create Campaign';
  campaignStatusArray: Array<any> = [
    { id: 1, value: "ACTIVE", },
    { id: 2, value: "INACTIVE" },
  ];

  campaignAutoDisposeArray: Array<any> = [
    { id: 1, value: "ALLOW", },
    { id: 2, value: "DISALLOW" },
    { id: 3, value: "ALERT" }
  ];

  maskArray: Array<any> = [
    { id: 1, value: "YES", },
    { id: 2, value: "NO" }
  ];

  crmHistoryArray: Array<any> = [
    { id: 1, value: "YES", },
    { id: 2, value: "NO" }
  ];

  editCampdata: any;
  campaignIdtoEdit: any;
  campaignDetails: any;
  campaignObjDetails: any;
  domainId: number;
  isUpdate: boolean = false;

  constructor(private campaignsService: CampaignsService,
    private toastr: ToastrService) {
    this.domainId = parseInt(sessionStorage.getItem(Constants.domainId) || '0');
    this.createCampaign = new CreateCampaigns();
    this.editCampaignObj = new newCampaign();
  }

  autoDisposeValue() {
    if (this.createCampaign.campaignsAutoDispose == '1') {
      this.isAutodispose = true;
    }
    else {
      this.isAutodispose = false;
    }
  }

  submit() {
    this.createCampaign.campaignsStatus = this.campaignStatusArray.find(x => x.id == this.createCampaign.campaignsStatus).value;
    this.createCampaign.campaignsAutoDispose = this.campaignAutoDisposeArray.find(x => x.id == this.createCampaign.campaignsAutoDispose).value;
    this.createCampaign.campaignsCrmHistory = this.crmHistoryArray.find(x => x.id == this.createCampaign.campaignsCrmHistory).value;
    this.createCampaign.campaignsMask = this.maskArray.find(x => x.id == this.createCampaign.campaignsMask).value;
    this.createCampaignSubmit.emit(this.createCampaign);
    if (this.isUpdate == true) {
      this.editCampaign();
    }
  }

  // data from parent component edit
  childData(parentData: any) {
    this.modalHeaderText = 'Update Campaign';
    this.campaignIdtoEdit = parentData.data.id;
    this.campaignObjDetails = this.campaignsData.filter((x: any) => x.id == parentData.data.id);
    this.editCampaignObj.crmId = this.campaignObjDetails[0].id;
    this.editCampaignObj.tableId = this.campaignObjDetails[0].tableId;
    if (this.campaignObjDetails[0]) {
      this.isUpdate = true;
    } else {
      this.isUpdate = false;
    }
    this.createCampaign.campaignsName = this.campaignObjDetails[0].name;
    this.createCampaign.campaignsDescription = this.campaignObjDetails[0].description;

    this.createCampaign.campaignsAutoDispose = this.campaignAutoDisposeArray.find(x => x.value == this.campaignObjDetails[0].autodispose).id;
    if (this.campaignObjDetails[0].autodispose == "ALLOW") {
      this.isAutodispose = true;
      this.createCampaign.campaignsMaximumTime = this.campaignObjDetails[0].automaxtime;
      this.createCampaign.campaignsMinimumTime = this.campaignObjDetails[0].automintime;
    }
    this.isAutodispose = false;
    this.createCampaign.campaignsStatus = this.campaignStatusArray.find(x => x.value == this.campaignObjDetails[0].status).id;

    if (this.campaignObjDetails[0].ismask == false) {
      this.createCampaign.campaignsMask = this.maskArray.find(x => x.id == 2).id;
    } else {
      this.createCampaign.campaignsMask = this.maskArray.find(x => x.id == 1).id;
    }

    if (this.campaignObjDetails[0].crmhistory == "Y" || this.campaignObjDetails[0].crmhistory == "YES"
      || this.campaignObjDetails[0].crmhistory == "yes") {
      this.createCampaign.campaignsCrmHistory = this.crmHistoryArray.find(x => x.id == 1).id;
    } else {
      this.createCampaign.campaignsCrmHistory = this.crmHistoryArray.find(x => x.id == 2).id;
    }
    var res: any = this.startCallUrl.filter((x: any) => x.id == this.campaignObjDetails[0].callstarturl);
    this.createCampaign.campaignsStartCallUrl = res[0].id;
    var res1: any = this.crmData.filter((x: any) => x.id == this.campaignObjDetails[0].crmId); //binded static value
    this.createCampaign.campaignsCrm = res1[0].id;
  }

  resetModal() {
    this.modalHeaderText = 'Create Campaign';
    this.createCampaign = new CreateCampaigns();
  }

  async getStartCallCrmData() {
    this.campaignsService.getEntityToAddCampaign().then(
      res => {
        if (res) {
          this.startCallCrmData = res;
          this.crmData = this.startCallCrmData.crmData;
          this.startCallUrl = this.startCallCrmData.startCallUrl;
        }
      },
      err => { this.startCallCrmData = err }
    )
  }


  getAllCampaigns() {
    this.campaignsService.getAllCampaigns().then(
      res => {
        if (res != null) {
          this.campaignsData = res;
        }
      },
      err => { this.campaignsData = err }
    )
  }

  async editCampaign() {
    this.editCampaignObj.name = this.createCampaign.campaignsName,
      this.editCampaignObj.description = this.createCampaign.campaignsDescription,
      this.editCampaignObj.status = this.createCampaign.campaignsStatus,
      this.editCampaignObj.minimumTime = this.createCampaign.campaignsMinimumTime,
      this.editCampaignObj.maximumTime = this.createCampaign.campaignsMaximumTime,
      this.editCampaignObj.callStartUrl = this.createCampaign.campaignsStartCallUrl,
      this.editCampaignObj.autoDispose = this.createCampaign.campaignsAutoDispose,
      this.editCampaignObj.domainId = this.domainId,
      this.editCampaignObj.isMask = this.createCampaign.campaignsMask == "YES" ? true : false,
      this.editCampaignObj.crmHistory = this.createCampaign.campaignsCrmHistory,
      this.editCampaignObj.crmId = this.createCampaign.campaignsCrm;

    this.campaignsService.editCampaign(this.editCampaignObj.crmId,this.editCampaignObj).then(
      res => {
        if (res != null) {
          this.editCampdata = res;
          this.toastr.success("Campaign Updated Successfully");
        }
      },
      err => { this.editCampdata = err }
    )
  }

  getCrmTableId(event: any) {
    let res1: any[] = this.crmData;
    this.createCampaign.selectedCrmTableId = res1.find(x => x.id == this.createCampaign.campaignsCrm).tableid;
  }

  ngOnInit(): void {
    this.getAllCampaigns();
    this.getStartCallCrmData();
  }
}
