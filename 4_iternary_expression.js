let age = 18;

let canVote = age === 18 ? true : false;
console.log("can vote", canVote);

// express ? true : false

let canDrink = age > 18 ? true : false;

console.log("can drink", canDrink);

let canVoteOrDrink =
  age === 18 ? "can vote" : age > 18 ? "can drink" : "can't vote or drink";

console.log("canVoteOrDrink", canVoteOrDrink);
