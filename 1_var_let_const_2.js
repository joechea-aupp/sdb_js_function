var canChange = 10;

console.log("the canChange is: ", canChange);

var canChange = 20;

console.log("the canChange is: ", canChange);

if (true) {
  // this is call block code
  var canChange = 30;
  console.log("the canChange in block: ", canChange);
}

console.log("finali canChange value is: ", canChange);

let blockCanChange = 10;

// let blockCanChange = 20;

console.log("the blockCanChange is: ", blockCanChange);

if (true) {
  // this is call block code
  let blockCanChange = 30;
  console.log("the blockCanChange in block: ", blockCanChange);
}

blockCanChange = 40;

console.log("finali blockCanChange value is: ", blockCanChange);

const cannotChange = 10;

console.log("the cannotChange is: ", cannotChange);

// const cannotChange = 20;

if (true) {
  // this is call block code
  const cannotChange = 30;
  console.log("the cannotChange in block: ", cannotChange);
}

// cannotChange = 40;

console.log("finali cannotChange value is: ", cannotChange);

// const with object and array
const user = {
  name: "jc",
  age: 18,
};

// user.name = "johncris";
// console.log("the user is: ", user);

// user = {
//   name: "johncris",
//   age: 18,
// };

const users = ["jc", "johncris"];

// users.push("johncris");

// console.log("the users is: ", users);

// users = ["johncris"];
