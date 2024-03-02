let age = 18;

switch (age) {
  case 18:
    console.log("can vote");
    break;
  case 19:
    console.log("can drink");
    break;
  default: {
    console.log("can't vote or drink");
    break;
  }
}
