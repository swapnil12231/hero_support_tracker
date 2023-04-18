export class CreateNewQueue {
    domainId!: number;
    campid!: number;
    queueName!: string;
    queuePriority: number = -1;
    musicClassId: number = -1;
    postCall: string = "Y";
    postCallDetails!: Array<PostCall>;
    queueTransferDetails!: Array<TransferLogic>;
    queueVoiceDetails!: Array<VoiceLogic>;
}

export class PostCall {
    type: Array<string> = [];
    dispoId: Array<any> = [];
    postMethodTypeValue: number = -1;
    postMethodType: string = 'api';
    dispositionOptionArray: Array<any> = [];
}

export class TransferLogic {
    step!: number;
    criteria!: string;
    transferType: string = '';
    transferData: number = -1;
}

export class VoiceLogic {
    event: number = -1;
    data!: any;
}

export class VoiceLogicEventApi {
    api: number = -1;
    request_type: string = "";
    response_type: string = "";
    response!: string;
    response_status!: string;
}

export class VoiceLogicEventAssignment {
    variable!: string;
    operation: string = "";
    operand!: string;
    function: string = "";
    x!: number;
    y!: number;
    symbol!: string;
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
    gotoif_true!: number;
    gotoif_false!: number;
}

export class VoiceLogicEventJson {
    res_variable!: string;
    voiceLogicEventJsonOptions!: Array<VoiceLogicEventJsonOptions>;
}
export class VoiceLogicEventJsonOptions {
    key!: string;
    name!: string;
}

export class VoiceLogicEventMusic {
    music_class: number = -1;
    music_class_name: string = "";
}


export class VoiceLogicEventOption {

    variable!: string;
    type: string = "FILE";
    file_id: number = -1;
    file_url!: string;
    file_duration!: number;
    timeout!: number;

}

export class VoiceLogicEventPlayPrompt {
    type: string = "FILE";
    file_id: number = -1;
    file_url!: string;
    file_duration!: number;
}

export class VoiceLogicEventQuestion {
    variable!: string;
    digit_timeout!: number;
    escape_digit!: string;
    max_digit!: number;
    type: string = "FILE";
    file_id: number = -1;
    file_url!: string;
    file_duration!: number;
}

export class VoiceLogicEventRecord {
    escape_digit!: string;
    timeout!: number;
    slience_timeout!: number;
    disposition_type: string = "";
    disposition!: number;
    apicheck: boolean = true;
    api: number = -1;
    request_type: string = "";
    response_type: string = "";
    response!: string;
    response_status!: string;
    dispositionOptionArray: Array<any> = [];
}

export class VoiceLogicEventWait {
    time!: number;
}