const personPrototype = {
  firstName: "Vyctor",
  lastName: "Guimarães",
  age: 30,
  getFullName: () => {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
