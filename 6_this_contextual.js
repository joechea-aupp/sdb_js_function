// use strict

console.log(this); // window

const userInfo = {
  firstName: "Joe",
  lastName: "Doe",
  age: 18,
  fullName: `${this.firstName} ${this.lastName}`,
};
