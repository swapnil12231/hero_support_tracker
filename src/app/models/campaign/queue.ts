export class CreateQueue {
    campaign: number = -1;
    name!: string;
    priority: number = -1;
    musicClass: number = -1;
}

export class PostCall {
    type: any = [];
    disposition: number = -1;
    APIIVROptions: number = -1;
    apiOrIvr: string = 'api';

}

export class TransferLogic {
    criteria!: string;
    transferType: string = '';
    skill: number = -1;
}

export class VoiceLogic {
    event: string = '';
    data!: string;
}

