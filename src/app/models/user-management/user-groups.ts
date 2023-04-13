

export class SettingDetails {


    manualAllow: string = "Yes";
    agentTransferAllow: string = "Yes";
    ivrTransferAllow: string = "Yes";
    queueTransferAllow: string = "Yes";
    transferAllow: string = "Yes";
    conferenceAllow: string = "Yes";
    alternateDial: string = "Yes";
    redial: string = "Yes";
    crmMask: string = "Yes";
    acceptRejectTimeOut: any = 0;
    showCallLogDial: string = "Yes";
    showCallLogPlay: string = "Yes";
    autoFollowupTime: any = 0;
    autoAnswer: string = "Yes";
    extensionChange: string = "Yes";
    followupEdit: string = "Yes";
    showSoftphonePanel: string = "Yes";
    screenRecording: string = "Yes";
    followupDelete: string = "Yes";
    showInfoTab: string = "Yes";
    showCallLogTab: string = "Yes";
    showParkCallTab: string = "Yes";
    showFollowuptab: string = "Yes";
    showExternalCRMTab: string = "Yes";
    hangupAllow: string = "Yes";
    dispositionAllow: string = "Yes";
    externalCRMLogin!: string;
    focusOnCall: string = "INTERNAL";
    holdAllow: string = "Yes";
    muteAllow: string = "Yes";
    rodAllow: string = "Yes";
    autoReadyDuration: any = 0;
    notification: string = "OFF";
    stunServerSetting !: string;
    showTimeline: string = "Yes";
    disconnectionOnRejection: string = "Yes";
    manualDialFormat: string = "Numeric";
    agentChangedPassword: string = "Yes";
    agentSoftphoneSIP: string = "Yes";

}

export class CreateUserGroup {

    name!: string;
    description!: string;
    agentlogin!: string;
    defaultCampId!: string;
    skills!: any;
    domainId!: any;
    maxinteraction!: string;
    settingDetails!: [];
    campaigns!: string;
    skillPriority!:any;
    interactionDetails!: Interaction;

}


export class Interaction {
    call!: Call ;
    inCall!: InCall;
    outCall!:OutCall;
    social!: Social;
    email!:Email;
    whatsapp!: Whatsapp ;
    sms!:SMS;
    facebook!: Facebook;
    twitter!: Twitter;
    instagram!: Instagram;
    viber!: Viber ;
    chat!: Chat;
    videoChat!: VideoChat ;
    

}


export class Call {
    seat: any = 0;
}

export class InCall {
    priority: any = 0;
    seat: any = 0;
    intractionAllowed:boolean = false;

}

export class OutCall {
    priority: any = 0;
    seat: any = 0;
    intractionAllowed:boolean = false;

}


export class Social {
    seat: any=0;

}
export class Email {
    priority: any = 0;
    seat: any = 0;
    intractionAllowed:boolean = false;

}
export class Whatsapp {
    priority: any = 0;
    seat: any = 0;
    intractionAllowed:boolean = false;

}
export class SMS {
    priority: any = 0;
    seat: any = 0;
    intractionAllowed:boolean = false;

}
export class Facebook {
    priority: any = 0;
    seat: any = 0;
    intractionAllowed:boolean = false;

}

export class Twitter {
    priority: any = 0;
    seat: any = 0;
    intractionAllowed:boolean = false;

}

export class Instagram {
    priority: any = 0;
    seat: any = 0;
    intractionAllowed:boolean = false;

}
export class Viber {
    priority: any = 0;
    seat: any = 0;
    intractionAllowed:boolean = false;

}
export class Chat {
    priority: any = 0;
    seat: any = 0;
    intractionAllowed:boolean = false;


}
export class VideoChat {
    priority: any = 0;
    seat: any = 0;
    intractionAllowed:boolean = false;


}

export class SkillsPriority
{
    skillId!:any;
    skill!:string;
    priotity!:any;
}




