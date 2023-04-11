export class CreateQueue {
    campaign: number = -1;
    name!: string;
    priority: number = -1;
    musicClass: number = -1;
}

export class PostCall {
    type: Array<string> = [];
    disposition: Array<any> = [];
    APIIVROptions: number = -1;
    apiOrIvr: string = 'api';
    dispositionOptionArray: Array<any> = [];
}

export class TransferLogic {
    criteria!: string;
    transferType: string = '';
    skill: number = -1;
}

export class VoiceLogic {
    event: number = -1;
    data!: string;
}

export class VoiceLogicEventApi {
    api: number = -1;
    requestType: string = "";
    responseType: string = "";
    response!: string;
    responseStatus!: string;
}

export class VoiceLogicEventAssignment {
    variable!: string;
    operation: string = "";
    operand!: string;
    function: string = "";
}

export class VoiceLogicEventExtension {
    extension!: string;
}
export class VoiceLogicEventFollowup {
    time!: string;
}

export class VoiceLogicEventGoToIf {
    variable!: string;
    condition: string = "";
    value!: string;
    goToIfTrue!: number;
    goToIfFalse!: number;
}

export class VoiceLogicEventJson {
    resonseVariable!: string;
    voiceLogicEventJsonOptions!: Array<VoiceLogicEventJsonOptions>;
}
export class VoiceLogicEventJsonOptions {
    key!: string;
    name!: string;
}

export class VoiceLogicEventOption {

    variable!: string;
    fileOrApi: string = "FILE";
    soundFile!: number;
    fileUrl!: string;
    fileDuration!: number;
    timeOut!: number;

}

export class VoiceLogicEventPlayPrompt {
    fileOrApi: string = "FILE";
    soundFile!: number;
    fileUrl!: string;
    fileDuration!: number;
}

export class VoiceLogicEventQuestion {
    variable!: string;
    digitTimeOut!: number;
    escapeDigit!: string;
    maxDigit!: number;
    fileOrApi: string = "FILE";
    soundFile!: number;
    fileUrl!: string;
    fileDuration!: number;
}

export class VoiceLogicEventRecord {
    escapeDigit!: string;
    timeout!: number;
    maxSilenceTimeout!: number;
    dispositionType: string = "";
    dispositionName: string = "";
    apiCheck: boolean = true;
    api: number = -1;
    requestType: string = "";
    responseType: string = "";
    response!: string;
    responseStatus!: string;
}

export class VoiceLogicEventWait {
    time!: number;
}