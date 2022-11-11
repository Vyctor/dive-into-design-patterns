import { EmailValidatorProtocol } from "./validation/email-validator.protocol";
import { EmailValidatorAdapter } from "./validation/email-validator.adapter";

function validaEmail(emailValidator: EmailValidatorProtocol) {
  emailValidator.isValid("vyctorguimaraes@gmail.com");
}

validaEmail(new EmailValidatorAdapter());
