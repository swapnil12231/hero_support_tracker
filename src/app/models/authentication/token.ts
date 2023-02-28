export interface Token  {
    authToken: string;
    refreshToken: string;
}

export interface JwtToken {
    id: string;
    sub: string;
    tid: string;
    exp: number;
    role: string;
    tenant: string;
    feature: any;
}
