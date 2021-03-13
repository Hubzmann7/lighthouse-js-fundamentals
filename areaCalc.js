// Define 3 functions to calculate area of 3 different shapes
/* 
*rectangles
*triangles
*circles
*/

// calculateRectangleArea(length, width); length * width 
function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) 
    return undefined;
  else return length * width;
}
// calculateTriangleArea(base, height); base * height / 2
function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) 
    return undefined;
  else return base * height * 0.5;
}
// calculateCircleArea(radius); pi * rr 
function calculateCircleArea(radius) {
  if (radius < 0) 
    return undefined;
  else return Math.PI * Math.pow(radius, 2);
}
// if any of the parameters are negative the function should return: undefined 

// Math.PI will access value of pi in JavaScript code 
// Paste the following code after the function to determine if working 

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined


