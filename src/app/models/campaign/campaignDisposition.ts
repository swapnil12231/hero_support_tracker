import { Disposition } from "./campaigns";

export class CampaignDisposition {
    Name!: string
    Description!: string;
    campaignDisositionList!: dispositionList[];
}
export class dispositionList {
    id!: number;
    Name!: string
    Description!: string;
    dispositionTypes!: dispositionType
}

export class dispositionType {
    id!: number;
    name!: string;
    description!: string
    type!: string;
    otherType!: string;
    autoDispose!: string;
    status!: string;
}

export class newCampaign {
    name!: string;
    description!: string
    status!: string
    autoDispose!: string
    minimumTime!: string
    maximumTime!: string
    callStartUrl!: string;
    tableId!: string;
    crmId!: string;
    domainId !: string;
    isMask!: string;
    crmHistory!: string;
    disposition!: Disposition[];
}
