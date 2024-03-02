function sayHi() {
  return `Hi, ${this.name}`;
}

const joeInfo = {
  name: "Joe",
  age: 18,
};

const janeInfo = {
  name: "Jane",
  age: 20,
};

console.log(sayHi.call(joeInfo));

const janeHi = sayHi.bind(janeInfo);

console.log(janeHi());

// consolelog(sayHi());
