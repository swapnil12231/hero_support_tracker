export class Table {
    name!: string;
    columns!: Array<Column>;
    interactions!: Array<Interaction>
}

export class Column {
    name!: string;
    type!: string;
    isPrimaryKey!: boolean;
    timestampKey!: boolean;
    mask!: boolean;
}

export enum Interaction {
    CALL, EMAIL, FACEBOOK, SMS, TWITTER, INSTAGRAM, VIBER, CHAT, WHATSAPP, VIDEOCHAT
}

export class DesignTable {
    public title!: string;
    public description !: string;
} 