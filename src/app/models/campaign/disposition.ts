export class CreateDisposition {
    type!: string;
    name!: string;
    description!: string;
    despositionOtherType !: string;
}

export class ExistingDesposition {
    campaign!: string;
    disposition!: string;
    dispositionName!: string;
}

export class DispositionModel {
    disposition !: DispositionModel;
}

export class disposition {
    Id!: number;
    Name!: string
}