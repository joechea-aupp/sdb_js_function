let age = 18;

if (age === 18) console.log("can vote");
if (age > 18) console.log("can drink");
if (age < 18) console.log("can't vote or drink");

// ------------ using block style--------------------
if (age === 18) {
  let canVote = true;
  console.log("can vote", canVote);
} else if (age > 18) {
  let canDrink = true;
  console.log("can drink", canDrink);
} else {
  let canVote = false;
  let canDrink = false;
  console.log("can't vote or drink", canVote, canDrink);
}
