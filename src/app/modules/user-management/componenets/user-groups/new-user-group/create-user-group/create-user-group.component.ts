import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {  Call, Chat, CreateUserGroup, Email, Facebook, InCall, Instagram, Interaction, OutCall, SMS, SkillsPriority, Social, Twitter, Viber, VideoChat, Whatsapp} from 'src/app/models/user-management/user-groups';
import { UserGroupsService } from 'src/app/modules/user-management/services/user-groups.service'; 

@Component({
  selector: 'app-create-user-group',
  templateUrl: './create-user-group.component.html',
  styleUrls: ['./create-user-group.component.css']
})
export class CreateUserGroupComponent implements OnInit {


  @Output() createUserGroupSubmit =new EventEmitter<any>();

  public defaultCampaignValue = {
    id: '',
    value: ''
  };
  public createUserGroup!: CreateUserGroup;

  public interaction!: Interaction;
  public skillsPriority!:SkillsPriority
  
  public prioritys: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  public deffaultCampaign: boolean = false;

  public skillsPriorities: Array<any> = [];

  public userGroupEntityData!: any;
  public campaignsArray: Array<any> = [];
  public skillsArray: Array<any> = [];
  public createUserGroupRes!: any;

  constructor(
    private userGroupsService: UserGroupsService,
  ) {


    this.skillsPriority=new SkillsPriority();

    this.createUserGroup = new CreateUserGroup();
    let call=new Call();
    let inCall=new InCall();
    let outCall=new OutCall();
    let social=new Social();
    let email=new Email();
    let whatsapp=new Whatsapp();
    let facebook=new Facebook();
    let instagram=new Instagram();
    let sms=new SMS();
    let twitter=new Twitter();
    let viber=new Viber();
    let chat=new Chat();
    let videoChat=new VideoChat();

    this.interaction=new Interaction();

    this.interaction.call=call;
    this.interaction.inCall=inCall;
    this.interaction.outCall=outCall;
    this.interaction.social=social;
    this.interaction.email=email;
    this.interaction.whatsapp=whatsapp;
    this.interaction.facebook=facebook;
    this.interaction.instagram=instagram;
    this.interaction.sms=sms;
    this.interaction.twitter=twitter;
    this.interaction.viber=viber;
    this.interaction.chat=chat;
    this.interaction.videoChat=videoChat;

    this.createUserGroup = new CreateUserGroup();
   this.createUserGroup.interactionDetails=this.interaction;
    // this.intractionAllowed = new IntractionAllowed();

  }

  ngOnInit(): void {

    this.getUserGroupEntity();
  }



  async getUserGroupEntity() {



    // let domainId = 1672730382222;
    this.userGroupsService.getUserGroupEntity()
      .then(
        (res: any) => {
          if (res) {
            this.userGroupEntityData = res;

            this.campaignsArray = Object.keys(res.campNameById).map((e: any) => ({ id: e, value: res.campNameById[e] }));

            this.skillsArray = Object.keys(res.skills).map((e: any) => ({ id: e, value: res.skills[e] }));

            this.skillsPriorities = [];


          }

        }
      )

  }


  selectedCampaign(campaignId: any) {


    if (campaignId != "undefined") {
      this.defaultCampaignValue.id = this.campaignsArray.find(campaign => campaign.id == campaignId).id;
      this.defaultCampaignValue.value = this.campaignsArray.find(campaign => campaign.id == campaignId).value;
    }


  }


  selectedSkill(skillId: any) {
    if (skillId != "undefined")
      this.skillsPriority = new SkillsPriority();
    const { id, value } = this.skillsArray.find(campaign => campaign.id == skillId)

    this.skillsPriority.skillId = id
    this.skillsPriority.skill = value
    this.skillsPriority.priotity = 0;

    this.skillsPriorities.push(this.skillsPriority);

  }


submit()
{

  // this.createUserGroup.campaigns.push()
  this.createUserGroup.domainId=1672730382222;
  this.createUserGroup.defaultCampId=this.defaultCampaignValue.value
  this.createUserGroup.skillPriority=Object.keys(this.skillsPriorities).map((e: any) => ({ skillId: this.skillsPriorities[e].skillId, priority: this.skillsPriorities[e].priotity }))
  
   
      this.createUserGroupSubmit.emit(this.createUserGroup)

}
  
}


