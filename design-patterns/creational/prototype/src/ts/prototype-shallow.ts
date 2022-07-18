interface Prototype {
  clone(): Prototype;
}

export class Address {
  constructor(public street: string, public number: number) {}
}

export class Person implements Prototype {
  public addresses: Address[] = [];
  constructor(public name: string, public age: number) {}

  nameAndAge(): string {
    return `${this.name}.\nAge: ${this.age} years old`;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }

  clone(): this {
    const newObject = Object.create(this);
    return newObject;
  }
}

const addressOne = new Address("Main", 123);
const personOne = new Person("John", 30);
personOne.addAddress(addressOne);

const personTwo = personOne.clone();

console.log(personTwo.addresses);
console.log(personOne.addresses);

personOne.addresses[0].number = 321;

console.log(personTwo.addresses);
console.log(personOne.addresses);
