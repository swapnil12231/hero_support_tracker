import { Component, OnInit } from '@angular/core';
import { CreateDisposition, ExistingDesposition, disposition } from 'src/app/models/campaign/disposition';
import { DispositionService } from '../../../services/disposition.service';
@Component({
  selector: 'app-create-disposition',
  templateUrl: './create-disposition.component.html',
  styleUrls: ['./create-disposition.component.css']
})
export class CreateDispositionComponent implements OnInit {

  createDisposition!: CreateDisposition;
  existingDesposition!: ExistingDesposition;

  createDispositionArray: Array<CreateDisposition>;
  dispositionTypeArray: Array<any> = [{ Id: 1, Name: "followup" },
  { Id: 2, Name: "dnd" }, { Id: 3, Name: "transfer" }, { Id: 4, Name: "redial" }, { Id: 5, Name: "others" }];
  campaignsOtherType: boolean = false;

  dispositionObj: any;
  domainId: any;
  currentDispoListArray: Array<any> = [];
  selectedDisposition !: any[];
  selectedItems: any = [];
  currentDispoList1: any = []
  addDispoResponse: any;
  constructor(
    private dispositionService: DispositionService,
  ) {
    this.domainId = sessionStorage.getItem('domainId');
    let createdisposition = new CreateDisposition();

    this.createDisposition = new CreateDisposition();
    this.existingDesposition = new ExistingDesposition();

    this.createDispositionArray = new Array<CreateDisposition>();
    this.createDispositionArray.push(createdisposition);
  }

  addAnotherCreateDisposition() {
    let createdisposition = new CreateDisposition();
    this.createDispositionArray.push(createdisposition);
    this.createDisposition.type = this.existingDesposition.disposition;
  }

  submit() {
    this.AddCampaignDisposition();
  }

  AddCampaignDisposition() {
    //   let addDispoObj = [
    //     {
    //       "campid": 1673372053354,
    //       "domainid": 1672730382222,
    //       "name": "FOLLOWUP",
    //       "description": "FOLLOWUP",
    //       "type": "FOLLOWUP",
    //       "status": "ACTIVE"
    //     }
    //   ]

    //   this.dispositionService.addDisposition(addDispoObj).then(
    //     res => {
    //       this.addDispoResponse = res;
    //       console.log("Disposition Saved Successfully")
    //     },
    //     err => { this.addDispoResponse = err }
    //   )
  }

  getDispoType(e: any) {
    if (e.target.value == 'others') {
      this.campaignsOtherType = true;
    } else {
      this.campaignsOtherType = false;
    }
  }

  async getEntityToAddDisposition() {
    this.domainId = 1672730382222;
    let userGroupId = 0;
    this.dispositionService.getEntityToAddDispotision(this.domainId, userGroupId).then(
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
    let res1: any[] = this.dispositionObj;
    this.currentDispoListArray = res1.find(x => x.campid == currentCampaignId).disposition;
  }

  ngOnInit(): void {
    this.domainId = sessionStorage.getItem('domainId');
    this.getEntityToAddDisposition();
  }

  addDisposition(e: any) {
    for (let i = 0; i < this.existingDesposition.disposition.length; i++) {
      let createDispo = new CreateDisposition();
      createDispo.type = this.existingDesposition.disposition[i];
      this.dispositionTypeArray.push(createDispo);
      this.createDispositionArray.push(createDispo);
    }
  }

}
