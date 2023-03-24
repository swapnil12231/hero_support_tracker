export class LoginModel {
    userName!: string;
    password!: string;
}

export class OtpModel {
    userEmail!: string;
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

export class ResetPassword {
    token!: string;
    password!: string;

}
