export class LoginModel {
    userEmail! : string;
    userName!: string;   
    otpRememberToken!: string;
   
}

export class OtpModel {
    userEmail!:string;
    userName!: string;  
    otp!: string;
    rememberLogin!: boolean;
    otpToken!: string;
}

export class OtpVerify {
    otpVerify!: string;
}

export class ForgotPasswordModel {
    email!: string;
}

