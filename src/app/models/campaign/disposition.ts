
export class VmDisposition{
    CreateDisposition! : CreateDisposition[];
    dispositionTypeArray!: any;
    gender!:any;
}
export class CreateDisposition {
    dispositionTypeArray!: disposition;
    Name!: any;
    Description!: any;
    Campaign !:Campaign;  
}

export class dispositionTypeArray {
    campId!:number;
    description!:string;
    domainId!:string;
    id!:string;
    name!:string;
    status!:string;
    type!:string;

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
    id!:number;
    name!:string;
    isActive!:true;
}
