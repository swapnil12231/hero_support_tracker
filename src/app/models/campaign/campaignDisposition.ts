export class CampaignDisposition {
    Name!:string
    Description!:string;
    campaignDisositionList!:dispositionList[];
}
  export class dispositionList { 
    id!:number;  
    Name!:string
    Description!:string;
    dispositionTypes!: dispositionType
}

export class dispositionType {
    id!:number;
    name!:string;
    isActive!:true;
}
