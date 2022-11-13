export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

export class ValidateEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === "string" && value.includes("@");
  }
}

export class ValidateCPF extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === "string" && value.length === 11;
  }
}

export class ValidateString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === "string";
  }
}

export class ValidateNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === "number";
  }
}

export class ValidationComposite extends ValidationComponent {
  private readonly children: Array<ValidationComponent> =
    new Array<ValidationComponent>();

  add(...validation: Array<ValidationComponent>): void {
    this.children.push(...validation);
  }

  validate(value: unknown): boolean {
    return this.children.every((child) => child.validate(value));
  }
}

const validateEmail = new ValidateEmail();
const validateNumber = new ValidateNumber();
const validateString = new ValidateString();

const validationEmailComposite = new ValidationComposite();
validationEmailComposite.add(validateEmail, validateString);

const emailIsValid = validateEmail.validate("dev.vyctor@gmail.com");
console.log("Email is valid: ", emailIsValid);

const validateIfIsNumberComposite = new ValidationComposite();
validateIfIsNumberComposite.add(validateNumber);

console.log("Number is valid? ", validateIfIsNumberComposite.validate(123));
console.log("Number is valid? ", validateIfIsNumberComposite.validate("123"));
