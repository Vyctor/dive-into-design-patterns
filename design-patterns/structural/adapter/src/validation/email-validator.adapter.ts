import { EmailValidatorProtocol } from "./email-validator.protocol";

export class EmailValidatorAdapter implements EmailValidatorProtocol {
  isValid(email: string): boolean {
    return email.length > 5;
  }
}
