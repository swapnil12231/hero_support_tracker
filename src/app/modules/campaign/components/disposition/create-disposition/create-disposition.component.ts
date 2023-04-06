import { Component, OnInit } from '@angular/core';
import { CampdispositionType, CreateDisposition, disposition, Existingdisposition, VmDisposition} from 'src/app/models/campaign/disposition';
import { DispositionService } from '../../../services/disposition.service';
@Component({
  selector: 'app-create-disposition',
  templateUrl: './create-disposition.component.html',
  styleUrls: ['./create-disposition.component.css']
})
export class CreateDispositionComponent implements OnInit {
  
  vmDisposition!: VmDisposition;  
  existingDesposition!: Existingdisposition; 
  campaignsOtherType: boolean = false;
  dispositionObj: any;
  domainId: any;
  currentDispoListArray: Array<any> = [];
  tempDisposition: Array<any> = [];
  constructor(
    private dispositionService: DispositionService,
  ) {
    
    this.tempDisposition =  [{ Id: 1, Name: "followup" },
    { Id: 2, Name: "dnd" }, { Id: 3, Name: "transfer" }, { Id: 4, Name: "redial" }, { Id: 5, Name: "others" }];
    this.addAnotherCreateDisposition();
  }

  addAnotherCreateDisposition() {
    debugger;
    this.vmDisposition = new VmDisposition();
    this.vmDisposition.CreateDisposition =new Array<CreateDisposition>();
    this.vmDisposition.CreateDisposition.push(new CreateDisposition());
    this.vmDisposition.dispositionTypeArray = new Array<disposition>();    
    this.vmDisposition.dispositionTypeArray = [{ Id: 1, Name: "followup" },
    { Id: 2, Name: "dnd" }, { Id: 3, Name: "transfer" }, { Id: 4, Name: "redial" }, { Id: 5, Name: "others" }];
    this.existingDesposition = new Existingdisposition();
    this.existingDesposition.MultipleCamdispositionType = new Array<CampdispositionType>();
    // this.existingDesposition.MultipleCamdispositionType.push(new CampdispositionType())
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
    debugger
    for (let i = 0; i < this.existingDesposition.MultipleCamdispositionType.length; i++) {
      let item = new CreateDisposition();
      item.Name =this.existingDesposition.MultipleCamdispositionType[i];
      item.Description =this.existingDesposition.MultipleCamdispositionType[i];     
      item.dispositionTypeArray = this.tempDisposition.find(x=>x.Name==this.existingDesposition.MultipleCamdispositionType[i]);
      this.vmDisposition.CreateDisposition.push(item);
    }
  }
}
