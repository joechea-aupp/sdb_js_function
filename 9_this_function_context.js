// use strict

function checkThis() {
  console.log(this);
}

checkThis();

const userInfo = {
  firstName: "Joe",
  lastName: "Doe",
  age: 18,
  fullName: function () {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
  canDive() {
    console.log(this);
    return this.age >= 18;
  },
};

userInfo.fullName();

const userInfoArrow = {
  firstName: "Joe",
  lastName: "Doe",
  age: 18,
  fullName: () => {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
  canDive() {
    console.log(this);
    return () => this.age >= 18;
  },
};

userInfoArrow.canDive();
