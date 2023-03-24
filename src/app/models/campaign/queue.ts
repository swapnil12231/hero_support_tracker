export class CreateQueue {
    campaign!: string;
    name!: string;
    priority!: string;
    musicClass!: string;
}

export class PostCall {
    type!: string;
    disposition!: string;
    APIIVROptions!: string;

}

export class TransferLogic {
    criteria!: string;
    transferType!: string;
    skill!: string;
}

export class VoiceLogic {
    event!: string;
    data!: string;
}

