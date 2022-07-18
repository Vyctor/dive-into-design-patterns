function Person(firstName, lastName, age) {
  this.lastName = lastName;
  this.fistName = firstName;
  this.age = age;
}

const personPrototype = {
  firstName: "Vyctor",
  lastName: "Guimarães",
  age: 30,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = "OI";
}

const person1 = new Person("Vyctor", "Guimarães", 30);
console.log(person1);
console.log(person1.fullName());
