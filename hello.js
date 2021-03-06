/*
const sayHello = function () {
  console.log("Hello, world");
}

sayHello();
*/
// declared a function named sayHello
// output string to console 
// called / invoked function using parentheses notation sayHello()
// sayHello() can be called / invoked as many times as needed 

const sayHello = function (name) {
  console.log("Hello, " + name);
}
// function takes value as input (name)
// input (name) concatenate to string "Hello, " then output result 
// input function is a parameter (name)
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

/*
* sayHello one of two main varieties of functions: 
* produces a side effect; it does something
* produces a result; calculates and returns a value that can later be used when needed
*/


