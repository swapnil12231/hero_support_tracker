import { Component, OnInit } from '@angular/core';
import { CampaignDisposition, dispositionList, dispositionType } from 'src/app/models/campaign/campaignDisposition';
import { CampdispositionType, CreateDisposition, disposition, dispositionTypeArray, Existingdisposition, VmDisposition } from 'src/app/models/campaign/disposition';
import { DispositionService } from '../../../services/disposition.service';

@Component({
  selector: 'app-create-disposition',
  templateUrl: './create-disposition.component.html',
  styleUrls: ['./create-disposition.component.css']
})
export class CreateDispositionComponent implements OnInit {

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
  constructor(private dispositionService: DispositionService,) {
    this.domainId = sessionStorage.getItem('domainId');
    this.usergroupid = sessionStorage.getItem('usergroupid');
    this.vmDisposition = new VmDisposition();
    this.campaignDisposition = new CampaignDisposition();
    this.campaignDisposition.campaignDisositionList = new Array<dispositionList>();
    this.campaignDisposition.campaignDisositionList.push(new dispositionList);
    this.dispositionTypeList = this.GetCustomerData();
    this.vmDisposition.dispositionTypeArray = new dispositionTypeArray();
    this.vmDisposition.CreateDisposition = new Array<CreateDisposition>();
    this.vmDisposition.CreateDisposition.push(new CreateDisposition());
    this.vmDisposition.dispositionTypeArray = new Array<disposition>();
    this.existingDesposition = new Existingdisposition();
    this.existingDesposition.MultipleCamdispositionType = new Array<CampdispositionType>();
    this.existingDesposition.MultipleCamdispositionType.push(new CampdispositionType())
  }

  addAnother() {
    const item1 = new dispositionList();
    item1.id = 0;
    item1.Name = "";
    item1.dispositionTypes = Object.assign({});
    this.campaignDisposition.campaignDisositionList.push(item1);
  }


  submit() {
    let postArray: any = [];
    this.campaignDisposition.campaignDisositionList.forEach(element => {
      let post = {
        "campid": this.existingDesposition?.Campaign,
        "domainid": this.domainId,
        "name": element?.Name ? element?.Name : "",
        "description": element?.Description ? element?.Description : "",
        "type": element.dispositionTypes?.name ? element.dispositionTypes?.name : "",
        "status": element.dispositionTypes?.isActive == true ? "ACTIVE" : "INACTIVE"

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

    this.dispositionService.addDisposition(postArray).then(
      res => {
        if (res != null) {
          this.despositionDetails = res;
        }
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

  addDisposition(e: any) {
    var count = this.dispositionTypeList.length;
    for (let i = 0; i < this.multiDispositionType.length; i++) {
      const item1 = new dispositionType();
      item1.id = count + i;
      const name = this.multiDispositionType[i];
      item1.name = String(name);
      item1.isActive = true;
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
