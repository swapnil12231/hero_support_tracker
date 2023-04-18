import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CampaignDisposition, dispositionList, dispositionType } from 'src/app/models/campaign/campaignDisposition';
import { CampdispositionType, CreateDisposition, disposition, dispositionTypeArray, Existingdisposition, VmDisposition } from 'src/app/models/campaign/disposition';
import { DispositionService } from '../../../services/disposition.service';
import { Constants } from 'src/app/models/constants';
import { ToastService } from 'src/app/services/common/toast.service';

@Component({
  selector: 'app-create-disposition',
  templateUrl: './create-disposition.component.html',
  styleUrls: ['./create-disposition.component.css']
})
export class CreateDispositionComponent implements OnInit {

  @Output()
  refreshDisposition = new EventEmitter<void>();

  vmDisposition!: VmDisposition;
  vmDispositionArray: any = [];
  existingDesposition!: Existingdisposition;
  campaignsOtherType: boolean = false;
  dispositionObj: any;
  domainId: any;
  data!: dispositionType;
  campaignDisposition!: CampaignDisposition;
  dispositionTypeList: any;
  multiDispositionType!: dispositionTypeArray[];
  despositionDetails: any;
  usergroupid: any;
  isEditEnabled: boolean = false;

  constructor(private dispositionService: DispositionService, private toastrService: ToastService) {
    this.domainId = parseInt(sessionStorage.getItem(Constants.domainId) || '0');
    this.usergroupid = parseInt(sessionStorage.getItem(Constants.userGroupId) || '0');
    this.initializeModalData();
  }

  addAnother() {
    const item1 = new dispositionList();
    item1.id = 0;
    item1.Name = "";
    item1.dispositionTypes = Object.assign({});
    this.campaignDisposition.campaignDisositionList.push(item1);
  }
  initializeModalData() {
    this.isEditEnabled = false;
    this.vmDisposition = new VmDisposition();
    this.campaignDisposition = new CampaignDisposition();
    this.campaignDisposition.campaignDisositionList = new Array<dispositionList>();
    let dispoList = new dispositionList();
    dispoList.dispositionTypes = new dispositionType();
    this.campaignDisposition.campaignDisositionList.push(dispoList);
    this.dispositionTypeList = this.GetCustomerData();
    this.vmDisposition.dispositionTypeArray = new dispositionTypeArray();
    this.vmDisposition.CreateDisposition = new Array<CreateDisposition>();
    this.vmDisposition.CreateDisposition.push(new CreateDisposition());
    this.vmDisposition.dispositionTypeArray = new Array<disposition>();
    this.existingDesposition = new Existingdisposition();
    this.existingDesposition.MultipleCamdispositionType = new Array<CampdispositionType>();
    this.existingDesposition.MultipleCamdispositionType.push(new CampdispositionType());
  }
  editDisposition() {
    let data = {
      id: this.campaignDisposition.campaignDisositionList[0].id,
      type: this.campaignDisposition.campaignDisositionList[0].dispositionTypes.name,
      desc: this.campaignDisposition.campaignDisositionList[0].Description,
      status: this.campaignDisposition.campaignDisositionList[0].dispositionTypes.status,
    };


    this.dispositionService.editDisposition(data).then(res => {
      this.toastrService.showSuccess("Disposition edited successfully", "Success");
      this.refreshDisposition.emit();
    }).catch(error => {
      this.toastrService.showError("Something went wrong", "Error");
    });
  }
  createDisposition() {
    let postArray: any = [];
    this.campaignDisposition.campaignDisositionList.forEach(element => {
      let post = {
        "campid": this.existingDesposition?.Campaign,
        "domainid": this.domainId,
        "name": element?.Name ? element?.Name : "",
        "description": element?.Description ? element?.Description : "",
        "type": element.dispositionTypes?.name ? element.dispositionTypes?.name : "",
        "status": "ACTIVE"
      };
      if (post.description || post.type || post.name) {
        postArray.push(post);
      }
    }
    );
    this.campaignDisposition.campaignDisositionList;
    this.existingDesposition.Campaign;
    this.AddCampaignDisposition(postArray);
  }

  AddCampaignDisposition(postArray: any) {

    this.dispositionService.addDisposition(postArray).then(res => {
      this.despositionDetails = res;
      this.refreshDisposition.emit();
    },
      err => { this.despositionDetails = err },
    )
  }

  getDispoType(e: any) {
    if (e.target.value == 'OTHERS') {
      this.campaignsOtherType = true;
    } else {
      this.campaignsOtherType = false;
    }
  }

  async getEntityToAddDisposition() {
    this.dispositionService.getEntityToAddDispotision().then(
      res => {
        if (res != 0) {
          this.dispositionObj = res;
        }
      },
      err => { this.dispositionObj = err }
    )
  }

  getCampaignId(e: any) {
    let currentCampaignId = e.target.value;
    let res1: any[] = this.dispositionObj;;
    var data = res1.find(x => x.campid == currentCampaignId).disposition;
    this.vmDisposition.dispositionTypeArray = data;

  }

  ngOnInit(): void {
    this.getEntityToAddDisposition();
  }
  setEditDispositionData(data: any) {
    this.isEditEnabled = true;

    this.campaignDisposition = new CampaignDisposition();
    this.campaignDisposition.campaignDisositionList = new Array<dispositionList>();
    this.existingDesposition.Campaign = this.dispositionObj.find((e: any) => e.campaign == data.campaign).campid || -1;


    let disposition = new dispositionList();
    disposition.dispositionTypes = this.dispositionTypeList.find((e: any) => e.name == data.type) || new dispositionType();
    disposition.dispositionTypes.status = data.status;
    disposition.Name = data.disposition;
    disposition.Description = data.description;
    disposition.id = data.id;

    this.campaignDisposition.campaignDisositionList.push(disposition);

  }
  addDisposition(e: any) {
    var count = this.dispositionTypeList.length;
    for (let i = 0; i < this.multiDispositionType.length; i++) {
      const item1 = new dispositionType();
      item1.id = count + i;
      const name = this.multiDispositionType[i];
      item1.name = String(name);
      item1.status = "ACTIVE";
      this.dispositionTypeList.push(item1)
      const item = new dispositionList();
      item.id = item1.id
      item.dispositionTypes = this.dispositionTypeList.find((x: { id: number; }) => x.id == item1.id);
      this.campaignDisposition.campaignDisositionList.push(item);

    }
  }

  private GetCustomerData() {
    return [
      {
        id: 0,
        name: "FOLLOWUP",
        isActive: true

      },
      {
        id: 1,
        name: "DND",
        isActive: true
      },
      {
        id: 2,
        name: "TRANSFER",
        isActive: true
      },
      {
        id: 3,
        name: "REDIAL",
        isActive: true
      },
      {
        id: 4,
        name: "OTHERS",
        isActive: true
      }
    ];
  }
}
