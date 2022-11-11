import { EmailValidatorAdapter } from "./email-validator.adapter";
import { EmailValidatorFunctionProtocol } from "./email-validator.protocol";

export const emailValidatorFunctionAdapter: EmailValidatorFunctionProtocol = (
  email: string
): boolean => {
  return new EmailValidatorAdapter().isValid(email);
};
