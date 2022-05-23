export interface EmailValidatorProtocol {
  isEmail: EmailValidatorProtocolFn;
}

export type EmailValidatorProtocolFn = (value: string) => boolean;
