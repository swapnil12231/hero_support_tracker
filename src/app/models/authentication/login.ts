export class LoginModel {
    userName!: string;
    password!: string;
}

export class OtpModel {   
    userName!: string;
    otp!: string;
    sessionid!: string;
   
}

export class OtpVerify {
    otpVerify!: string;
}

export class ForgotPasswordModel {
    email!: string;
}

export class ResetPassword {
    token!: string;
    password!: string;

}
