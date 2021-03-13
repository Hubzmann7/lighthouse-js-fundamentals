// define a function howManyHundreds that can be made from a number
/* 
*When this function is given a number, it should return how many hundreds fits into that number. 
howManyHundreds      output
(1000)               10
(894)                8
(520)                5
(99)                 0
(0)                  0

* the modulo operator (%) will be useful 
* paste the following code after the function definition to help verify that it works correctly:
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
*/

function howManyHundreds(num){
  return num % 100 === 0 ? num / 100 : (num - num % 100) / 100;
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
