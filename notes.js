console.log("dirt worm worm dirt dirt asdasd".split("dirt").length);

let a = 5;

console.log(a++);
console.log(++a);

const foo = [1, 2, 3];
const [n] = foo;
console.log(n);

console.log("I");

setTimeout(() => {
  console.log("love");
}, 0);

console.log("asddsf");

let v = 1;
var v2 = function () {
  console.log(v);
};

function printA() {
  console.log(answer);
  var answer = 1;
}

printA();
printA();

for (let i = 0; i < 5; i++) {
  console.log(i);
}

"use strict"
function logThis() {
  this.desc = "logger"
  console.log(this);
}
new logThis