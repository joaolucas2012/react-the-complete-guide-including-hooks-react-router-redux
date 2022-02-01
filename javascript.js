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
