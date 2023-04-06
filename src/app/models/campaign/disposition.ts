
export class VmDisposition{
    CreateDisposition! : CreateDisposition[];
    dispositionTypeArray!: disposition[];
    gender!:any;
}
export class CreateDisposition {
    dispositionTypeArray!: disposition;
    Name!: any;
    Description!: any;
    Campaign !:Campaign;
    gender!:any;
    //dispositionTypeArray !: disposition[];
}


export class CampdispositionType { 
    Id!:number;  
    Name!: string
}

export class Campaign {   
    campaign!: string;
    campid!:number;
}
export class Existingdisposition{
    Campaign !:Campaign;
    MultipleCamdispositionType!: CampdispositionType[];
}

export class DispositionModel {
    disposition !: DispositionModel;
}

export class disposition {
    Id!: number;
    Name!: string
}