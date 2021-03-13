// define a function ageCalculator that determines someone's age

/* function should take three parameters:
* name - string representing someone's name
* yearOfBirth - number representing year of birth
* currentYear - number representing current year
*
* ageCalculator function should return a string explaining how old the person is. Example if ageCalculator is called with the following inputs ("Suzie", 1983, 2015); the return value should be: 
"Suzie is 32 years old." 
*/

// past the following code at the end of the code to determine if the function is working correctly
/*
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
*/ 

function ageCalculator(name, yearOfBirth, currentYear){
  let age = currentYear - yearOfBirth
  return name + " is " + age + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

