let grade = 90;

function checkGrade(grade) {
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log("the grade is: ", checkGrade(grade));

const checkGrade2 = function (grade) {
  // this function that assigned to const is call anonymous function
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else {
    return "F";
  }
};

console.log("the grade is: ", checkGrade2(grade));

const userInfo = {
  firstName: "Joe",
  lastName: "Doe",
  age: 18,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  canDive() {
    return this.age >= 18;
  },
};

console.log("the fullName is: ", userInfo.fullName());
console.log("can dive? ", userInfo.canDive());
