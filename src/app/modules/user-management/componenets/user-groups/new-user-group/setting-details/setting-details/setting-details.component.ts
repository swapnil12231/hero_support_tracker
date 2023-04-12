import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SettingDetails }from 'src/app/models/user-management/user-groups';

@Component({
  selector: 'app-setting-details',
  templateUrl: './setting-details.component.html',
  styleUrls: ['./setting-details.component.css']
})
export class SettingDetailsComponent implements OnInit {


  @Output() settingDetailsSubmit = new EventEmitter<any>();



  public settingDetails!: SettingDetails;


  constructor() {
    this.settingDetails = new SettingDetails();
  }

  ngOnInit(): void {
  }


  submit() {


    const settingDetails = [

      {
        parameterName: "Manual Allow",
        parameterValue: this.settingDetails.manualAllow,
      },


      {
        parameterName: "Agent Transfer Allow",
        parameterValue: this.settingDetails.agentTransferAllow,
      },


      {
        parameterName: "Ivr Transfer Allow",
        parameterValue: this.settingDetails.ivrTransferAllow,
      },

      
      {
        parameterName: "Queue Transfer Allow",
        parameterValue: this.settingDetails.queueTransferAllow,
      },
      
      {
        parameterName: "Transfer Allow",
        parameterValue: this.settingDetails.transferAllow,
      },
      
      {
        parameterName: "Conference Allow",
        parameterValue: this.settingDetails.conferenceAllow,
      },
      
      {
        parameterName: "Alternate Dial",
        parameterValue: this.settingDetails.alternateDial,
      },
      
      
      {
        parameterName: "Redial",
        parameterValue: this.settingDetails.redial,
      },
      
      {
        parameterName: "CRM Mask",
        parameterValue: this.settingDetails.crmMask,
      },
      
      {
        parameterName: "Accept Reject TimeOut ",
        parameterValue: this.settingDetails.acceptRejectTimeOut ,
      },
      
      {
        parameterName: "Show Call Log Dial",
        parameterValue: this.settingDetails.showCallLogDial,
      },
      
      {
        parameterName: "Show Call Log Play",
        parameterValue: this.settingDetails.showCallLogPlay,
      },
      
      {
        parameterName: "Auto Followup Time",
        parameterValue: this.settingDetails.autoFollowupTime,
      },
      
      {
        parameterName: "Auto Answer",
        parameterValue: this.settingDetails.autoAnswer,
      },
      
      {
        parameterName: "Extension Change",
        parameterValue: this.settingDetails.extensionChange,
      },
      
      {
        parameterName: "Followup Edit",
        parameterValue: this.settingDetails.followupEdit,
      },
      
      {
        parameterName: "Show Softphone Panel",
        parameterValue: this.settingDetails.showSoftphonePanel,
      },
      
      {
        parameterName: "Screen Recording",
        parameterValue: this.settingDetails.screenRecording,
      },
      
      {
        parameterName: "Followup Delete",
        parameterValue: this.settingDetails.followupDelete,
      },
      {
        parameterName: "Show Info Tab",
        parameterValue: this.settingDetails.showInfoTab,
      },
      {
        parameterName: "Show Call Log Tab",
        parameterValue: this.settingDetails.showCallLogTab,
      },
      {
        parameterName: "Show Park Call Tab",
        parameterValue: this.settingDetails.showParkCallTab,
      },
      {
        parameterName: "Show Followup tab",
        parameterValue: this.settingDetails.showFollowuptab,
      },
      {
        parameterName: "Show External CRM Tab",
        parameterValue: this.settingDetails.showExternalCRMTab,
      },
      {
        parameterName: "Hangup Allow",
        parameterValue: this.settingDetails.hangupAllow,
      },
      {
        parameterName: "Disposition Allow",
        parameterValue: this.settingDetails.dispositionAllow,
      },
      {
        parameterName: "External CRM Login",
        parameterValue: this.settingDetails.externalCRMLogin,
      },
      {
        parameterName: "Focus On Call",
        parameterValue: this.settingDetails.focusOnCall,
      },
      {
        parameterName: "Hold Allow",
        parameterValue: this.settingDetails.holdAllow,
      },
      {
        parameterName: "Mute Allow",
        parameterValue: this.settingDetails.muteAllow,
      },
      {
        parameterName: "ROD Allow",
        parameterValue: this.settingDetails.rodAllow,
      },
      {
        parameterName: "Auto Ready Duration",
        parameterValue: this.settingDetails.autoReadyDuration,
      },
      {
        parameterName: "Notification",
        parameterValue: this.settingDetails.notification,
      },
      {
        parameterName: "Stun Server Setting",
        parameterValue: this.settingDetails.stunServerSetting,
      },
      {
        parameterName: "Show Timeline",
        parameterValue: this.settingDetails.showTimeline,
      },
      {
        parameterName: "Disconnection On Rejection",
        parameterValue: this.settingDetails.disconnectionOnRejection,
      },
      {
        parameterName: "Manual Dial Format",
        parameterValue: this.settingDetails.manualDialFormat,
      },
      {
        parameterName: "Agent Changed Password",
        parameterValue: this.settingDetails.agentChangedPassword,
      },
      {
        parameterName: "Agent Softphone SIP",
        parameterValue: this.settingDetails.agentSoftphoneSIP,
      }

    ]


    this.settingDetailsSubmit.emit(settingDetails);
  
  }
}
