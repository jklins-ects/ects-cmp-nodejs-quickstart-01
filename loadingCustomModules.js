const { add, subtract } = require("./myMathModule");
//console.log(mymath);
console.log(add(5, 6));
console.log(subtract(6, 9));
/*
const mymath = require("./myMathModule");
console.log(mymath);
console.log(mymath.add(5, 6));
console.log(mymath.subtract(6, 9));
*/

const greet = require("./singleFuncMethod");
console.log(greet("Matt"));

const Person = require("./moduleWithClass");
//console.log(Person);
const person1 = new Person("Brooks", 17);
console.log(person1.greet());
