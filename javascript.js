// REVIEWING CLASSES
/*
class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Max";
    this.gender = "Female";
  }

  printMyName() {
    console.log(this.name);
  }
}
const person = new Person();
person.printMyName();
person.printGender();
*/

///////////////////////////////////////////////////
/*
// REVIEW OF CLASSES AND METHODS
class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Max";
  gender = "Female";

  printMyName = () => {
    console.log(this.name);
  };
}
const person = new Person();
person.printMyName();
person.printGender();
*/
///////////////////////////////////////////////////
/*
// REVIEW OF SPREAD AND REST OPERATORS

// Spread operator with arrays
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

// Spread operator with objects
const person = {
  name: "Max",
};
const newPerson = {
  ...person,
  age: 28,
};
console.log(newPerson);

// Rest operator
const filter = (...args) => {
  return args.filter((el) => el === 1);
};
console.log(filter(1, 2, 3, 4));
*/
///////////////////////////////////////////////////
