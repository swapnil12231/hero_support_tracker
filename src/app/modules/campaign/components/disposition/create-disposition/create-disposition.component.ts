import { Component, OnInit } from '@angular/core';
import { CampaignDisposition, dispositionList, dispositionType } from 'src/app/models/campaign/campaignDisposition';
import { CampdispositionType, CreateDisposition, disposition, dispositionTypeArray, Existingdisposition, VmDisposition} from 'src/app/models/campaign/disposition';
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
  data!:dispositionType;  
  campaignDisposition!: CampaignDisposition;
  dispositionTypeList: any;
  selectedCityCodes!: dispositionTypeArray[];
  // cities!:City[];
  //   selectedCity!: City;
  constructor(
    private dispositionService: DispositionService,
  ) {   
   
    this.addAnotherCreateDisposition();
    this.campaignDisposition = new CampaignDisposition();
    this.campaignDisposition.campaignDisositionList = new Array<dispositionList>();
    let item = new dispositionList()
    this.campaignDisposition.campaignDisositionList.push(item);
    this.dispositionTypeList = this.GetCustomerData();
    this.vmDisposition.dispositionTypeArray = new dispositionTypeArray();
    // let item1  =new dispositionType()
    // this.vmDisposition.dispositionTypeArray.push(item1);
  }

  addAnotherCreateDisposition() {
    debugger;
    this.vmDisposition = new VmDisposition();
    this.vmDisposition.CreateDisposition =new Array<CreateDisposition>();
    this.vmDisposition.CreateDisposition.push(new CreateDisposition());
    //this.vmDisposition.dispositionTypeArray = new Array<disposition>();    
   
    this.existingDesposition = new Existingdisposition();
    this.existingDesposition.MultipleCamdispositionType = new Array<CampdispositionType>();
    // this.existingDesposition.MultipleCamdispositionType.push(new CampdispositionType())
  }

  submit() {
    this.AddCampaignDisposition();
  }

  AddCampaignDisposition() {
   
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
    debugger;
    var data = res1.find(x => x.campid == currentCampaignId).disposition;
    // for(let i=0;i<data.length-1; i++){
    //   const item = new dispositionType();
    //   item.id = data[i].id;
    //   item.name = data[i].name;      
    //   this.vmDisposition.dispositionTypeArray.push(item);
    // }
    this.vmDisposition.dispositionTypeArray = data;
    //this.currentDispoListArray = res1.find(x => x.campid == currentCampaignId).disposition;
  }

  ngOnInit(): void {
    this.domainId = sessionStorage.getItem('domainId');
   
    this.getEntityToAddDisposition();
  }
  private GetCustomerData() {
    return [
      {
        id: 0,
        name: "",
        isActive: true
       
      },
      {
        id: 1,
        name: "FOLLOWUP",
        isActive: true
       
      },
      {
        id: 2,
        name: "DND",
        isActive: true
      },
      {
        id: 3,
        name: "TRANSFER",
        isActive: true
      },
      {
        id: 4,
        name: "REDIAL",
        isActive: true
      },
      {
        id: 5,
        name: "OTHERS",
        isActive: true
      }
    ];
  }
  addDisposition(e: any) {
    debugger
    var count =  this.dispositionTypeList.length;
     for (let i = 0; i < this.selectedCityCodes.length; i++) {

    const item1 = new dispositionType();
    item1.id=count+i;
    const name = this.selectedCityCodes[i];
    item1.name =String(name);// this.selectedCityCodes[i];
    item1.isActive = true;
    this.dispositionTypeList.push(item1) 

    const item = new dispositionList();
    item.id = item1.id 
    item.dispositionTypes = this.dispositionTypeList.find((x: { id: number; })=>x.id==item1.id);
    this.campaignDisposition.campaignDisositionList.push(item);

    // const item4 = new dispositionType();
    // item4.id=7;
    // item4.name ="xyz";
    // item4.isActive = true;
    // this.dispositionTypeList.push(item4) 

    // const item3 = new dispositionList();
    // item3.id = 7;  
    // item3.dispositionTypes = this.dispositionTypeList.find((x: { id: number; }) => x.id == 7);
    // this.campaignDisposition.campaignDisositionList.push(item3);


    // const item5 = new dispositionType();
    // item5.id=8;
    // item5.name ="Akshay pudch tula net karych ahe";
    // item5.isActive = true;
    // this.dispositionTypeList.push(item5) 

    // const item6 = new dispositionList();
    // item6.id = 8  
    // item6.dispositionTypes = this.dispositionTypeList.find((x: { id: number; }) => x.id == 8);
    // this.campaignDisposition.campaignDisositionList.push(item6);  
  }
}
}
