const Student = function (firstName, lastName, age, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;
  this.fullName = () => `${this.firstName} ${this.lastName}`;
};

const joe = new Student("Joe", "Doe", 18, "jc@email.com");
const jane = new Student("Jane", "Doe", 20, "jn@email.com");

console.log(joe.fullName());
console.log(jane.fullName());
