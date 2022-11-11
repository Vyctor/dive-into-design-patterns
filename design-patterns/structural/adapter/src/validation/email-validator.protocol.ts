export interface EmailValidatorProtocol {
  isValid: EmailValidatorFunctionProtocol;
}

export interface EmailValidatorFunctionProtocol {
  (value: string): boolean;
}
