import isEmail from "validator/lib/isEmail";
import { EmailValidatorProtocol } from "./EmailValidatorProtocol";

export class EmailValidatorAdapter implements EmailValidatorProtocol {
  public isEmail(value: string): boolean {
    return isEmail(value);
  }
}
