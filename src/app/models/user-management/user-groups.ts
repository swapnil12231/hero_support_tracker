export class CreateUserGroup {
    name!: string;
    description!: String;
    campaign: string = "undefined";
    skills!: string;
    agentCampaignSelection!: string;
    agentMaxInteraction!: string;
    defaultCampaign!: string;

}

export class Priority {
    inCall: any = 0;
    email: any = 0;
    outCall: any = 0;
    whatsapp: any = 0;
    sms: any = 0;
    facebook: any = 0;
    twitter: any = 0;
    instagram: any = 0;
    viber: any = 0;
    chat: any = 0;
    videoChat: any = 0;
}

export class Seat {
    call: any = 0;
    inCall: any = 0;
    outCall: any = 0;
    email: any = 0;
    social: any = 0;
    whatsapp: any = 0;
    sms: any = 0;
    facebook: any = 0;
    twitter: any = 0;
    instagram: any = 0;
    viber: any = 0;
    chat: any = 0;
    videoChat: any = 0;
}

export class IntractionAllowed {
    call: boolean = false;
    inCall: boolean = false;
    outCall: boolean = false;
    email: boolean = false;
    social: boolean = false;
    whatsapp: boolean = false;
    sms: boolean = false;
    facebook: boolean = false;
    twitter: boolean = false;
    instagram: boolean = false;
    viber: boolean = false;
    chat: boolean = false;
    videoChat: boolean = false;

}

export class SkillsPriority {
    skill!: string;
    skillId!: any;
    priotity!: any;
}


export class SettingDetails {


    manualAllow: string="Yes";
    agentTransferAllow: string="Yes";
    ivrTransferAllow: string="Yes";
    queueTransferAllow: string="Yes";
    transferAllow	: string="Yes";
    conferenceAllow	: string="Yes";
    alternateDial	: string="Yes";
    redial: string="Yes";
    crmMask	: string="Yes";
    acceptRejectTimeOut: any=0;
    showCallLogDial	: string="Yes";
    showCallLogPlay	: string="Yes";
    autoFollowupTime: any=0;
    autoAnswer	: string="Yes";
    extensionChange	: string="Yes";
    followupEdit: string="Yes";
    showSoftphonePanel: string="Yes";
    screenRecording	: string="Yes";
    followupDelete	: string="Yes";
    showInfoTab	: string="Yes";
    showCallLogTab	: string="Yes";
    showParkCallTab	: string="Yes";
    showFollowuptab	: string="Yes";
    showExternalCRMTab: string="Yes";
    hangupAllow	: string="Yes";
    dispositionAllow	: string="Yes";
    externalCRMLogin!:string;
    focusOnCall	: string="INTERNAL";
    holdAllow	: string="Yes";
    muteAllow	: string="Yes";
    rodAllow: string="Yes";
    autoReadyDuration 	: any=0;
    notification: string="OFF";
    stunServerSetting !: string;
    showTimeline: string="Yes";
    disconnectionOnRejection: string="Yes";
    manualDialFormat	: string="Numeric";
    agentChangedPassword: string="Yes";
    agentSoftphoneSIP		: string="Yes";

}