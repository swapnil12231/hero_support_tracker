export class CreateCampaigns {
    campaignsName!: string;
    campaignsDescription!: string;
    campaignsStatus!: string;
    campaignsAutoDispose!: string;
    autoDisposeStatus !: any;
    autoDispoStatus!: string;
    campaignsMaximumTime!: string;
    campaignsMinimumTime!: string;
    campaignsStartCallUrl!: string;
    campaignsMask!: string;
    campaignsCrm!: string;
    campaignsCrmHistory!: string;
    selectedCrmTableId!: string;
    autoDispoid !: string;
}

export class Disposition {
    type!: string;
    name!: string;
    description!: string;
    campaignsOtherType!: string;
    autoDispose !: boolean;
}