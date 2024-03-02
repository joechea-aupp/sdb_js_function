// using OR logical operator
let username = "jc@email.com";
let password = "1234";

// let username = "";
// let password = undefined;

let userLogin = username || "guest";
let passLogin = password || "guest";

console.log("userLogin", userLogin);
console.log("passLogin", passLogin);

// using AND logical operator
// let userLogin2 = username && username + "_verified";
// let passLogin2 = password && password + "_encrypted";

// console.log("userLogin2", userLogin2);
// console.log("passLogin2", passLogin2);

// using NULLISH operator
// only if the value is null or undefined, it will use the default value
// let userLogin3 = username ?? "guest";
// let passLogin3 = password ?? "guest";

// console.log("userLogin3", userLogin3);
// console.log("passLogin3", passLogin3);

// using OPTIONAL CHAINING operator
userInfo = {
  username: "jc@email.com",
  password: "1234",
};
let userLogin4 = userInfo?.username;
let passLogin4 = userInfo?.password;

console.log("userLogin4", userLogin4);
console.log("passLogin4", passLogin4);
