export class CreateCampaigns {
    campaignsName!: string;
    campaignsDescription!: string;
    campaignsStatus!: string;
    campaignsAutoDispose!: string;
    campaignsMaximumTime!: string;
    campaignsMinimumTime!: string;
    campaignsStartCallUrl!: string;
    campaignsMask!: string;
    campaignsCrm!: string;
    campaignsCrmHistory!: string;
    selectedCrmTableId!: string;
}

export class Disposition {
    type!: string;
    name!: string;
    description!: string;
    campaignsOtherType!: string;
    autoDispose !: boolean;
}