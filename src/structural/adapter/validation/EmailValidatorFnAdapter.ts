import isEmail from "validator/lib/isEmail";
import { EmailValidatorProtocolFn } from "./EmailValidatorProtocol";

export const emailValidatorFnAdapter: EmailValidatorProtocolFn = (value: string): boolean => {
  return isEmail(value);
};
