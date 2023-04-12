import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Constants } from 'src/app/models/constants';
import { Priority, CreateUserGroup, Seat, IntractionAllowed, SkillsPriority } from 'src/app/models/user-management/user-groups';
import { UserGroupsService } from 'src/app/modules/user-management/services/user-groups.service';

@Component({
  selector: 'app-create-user-group',
  templateUrl: './create-user-group.component.html',
  styleUrls: ['./create-user-group.component.css']
})
export class CreateUserGroupComponent implements OnInit {


  @Output() createUserGroupSubmit = new EventEmitter<any>();

  public defaultCampaignValue = {
    id: '',
    value: ''
  };
  public skillsPriority!: SkillsPriority;
  public createUserGroup!: CreateUserGroup;
  public priority!: Priority;
  public seat!: Seat;
  public intractionAllowed!: IntractionAllowed;

  public prioritys: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  public deffaultCampaign: boolean = false;

  public skillsPrioritys: Array<any> = [];

  public userGroupEntityData!: any;
  public campaignsArray: Array<any> = [];
  public skillsArray: Array<any> = [];
  public createUserGroupRes!: any;
  domainId: number;

  constructor(
    private userGroupsService: UserGroupsService,
  ) {
    this.createUserGroup = new CreateUserGroup();
    this.priority = new Priority();
    this.seat = new Seat();
    this.intractionAllowed = new IntractionAllowed();
    this.domainId = parseInt(sessionStorage.getItem(Constants.domainId) || '0');

  }

  ngOnInit(): void {

    this.getUserGroupEntity();
  }



  async getUserGroupEntity() {
    this.userGroupsService.getUserGroupEntity()
      .then(
        (res: any) => {
          if (res) {
            this.userGroupEntityData = res;

            this.campaignsArray = Object.keys(res.campNameById).map((e: any) => ({ id: e, value: res.campNameById[e] }));

            this.skillsArray = Object.keys(res.skills).map((e: any) => ({ id: e, value: res.skills[e] }));

            this.skillsPrioritys = [];


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

    this.skillsPrioritys.push(this.skillsPriority);

  }


  submit() {

    let dataObj = {
      "name": this.createUserGroup.name,
      "description": this.createUserGroup.description,
      "agentlogin": this.createUserGroup.agentCampaignSelection,
      "defaultCampId": this.defaultCampaignValue.id,
      "domainId": this.domainId,
      "interactionDetails": {
        "call": {
          //  "priority": "priority",
          "seat": this.seat.call,
          "intractionAllowed": this.intractionAllowed.call
        },
        "inCall": {
          "priority": this.priority.inCall,
          "seat": this.seat.inCall,
          "intractionAllowed": this.intractionAllowed.inCall
        },
        "outCall": {
          "priority": this.priority.outCall,
          "seat": this.seat.outCall,
          "intractionAllowed": this.intractionAllowed.outCall
        },
        "social": {
          //  "priority": "priority",
          "seat": this.seat.social,
          "intractionAllowed": this.intractionAllowed.social
        },
        "email": {
          "priority": this.priority.email,
          "seat": this.seat.email,
          "intractionAllowed": this.intractionAllowed.email
        },
        "whatsapp": {
          "priority": this.priority.whatsapp,
          "seat": this.seat.whatsapp,
          "intractionAllowed": this.intractionAllowed.whatsapp
        },
        "sms": {
          "priority": this.priority.sms,
          "seat": this.seat.sms,
          "intractionAllowed": this.intractionAllowed.sms
        },
        "facebook": {
          "priority": this.priority.facebook,
          "seat": this.seat.facebook,
          "intractionAllowed": this.intractionAllowed.facebook
        },
        "twitter": {
          "priority": this.priority.twitter,
          "seat": this.seat.twitter,
          "intractionAllowed": this.intractionAllowed.twitter
        },
        "instagram": {
          "priority": this.priority.instagram,
          "seat": this.seat.instagram,
          "intractionAllowed": this.intractionAllowed.instagram
        },
        "viber": {
          "priority  ": this.priority.viber,
          "seat": this.seat.viber,
          "intractionAllowed": this.intractionAllowed.viber
        },
        "chat": {
          "priority": this.priority.chat,
          "seat": this.seat.chat,
          "intractionAllowed": this.intractionAllowed.chat
        },
        "videoChat": {
          "priority": this.priority.videoChat,
          "seat": this.seat.videoChat,
          "intractionAllowed": this.intractionAllowed.videoChat
        },
        "maxinteraction": this.createUserGroup.agentMaxInteraction,
      },
      "settingDetails": [

      ],
      "campaigns": [
        this.createUserGroup.campaign,
      ],
      "skillPriority": Object.keys(this.skillsPrioritys).map((e: any) => ({ skillId: this.skillsPrioritys[e].skillId, priority: this.skillsPrioritys[e].priotity }))


    }

    this.createUserGroupSubmit.emit(dataObj)

  }

}


