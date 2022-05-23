import isEmail from "validator/lib/isEmail";
import { EmailValidatorAdapter } from "./validation/EmailValidatorAdapter";
import { emailValidatorFnAdapter } from "./validation/EmailValidatorFnAdapter";
import {
  EmailValidatorProtocol,
  EmailValidatorProtocolFn,
} from "./validation/EmailValidatorProtocol";

function validaEmail(emailValidator: EmailValidatorProtocol, email: string): void {
  if (emailValidator.isEmail(email)) {
    console.log("Válido");
  } else {
    console.log("Inválido");
  }
}

function validaEmailFn(emailValidator: EmailValidatorProtocolFn, email: string): void {
  if (emailValidator(email)) {
    console.log("Válido");
  } else {
    console.log("Inválido");
  }
}

validaEmail(new EmailValidatorAdapter(), "vinicius@gmail.com");
validaEmailFn(emailValidatorFnAdapter, "vinicius@gmail.com");
