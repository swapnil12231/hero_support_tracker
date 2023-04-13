export class CreateSkillSet
{
    name!:string;
    color!:string;
    description!:string;
    status:any="INACTIVE";
    domainid!:any;
}

export class SkillSetData
{
    data!:any;
    canShowUpdate:boolean=false;
}



export class UpdateSkillSetData
{
    data!:any;
    canShowUpdate:boolean=false;
}