// //leap year checker
// function isLeapYear(year) {
//   if (year % 400 === 0) {
//     return true; // Divisible by 400, hence a leap year
//   } else if (year % 100 === 0) {
//     return false; // Divisible by 100 but not by 400, hence not a leap year
//   } else if (year % 4 === 0) {
//     return true; // Divisible by 4 but not by 100, hence a leap year
//   } else {
//     return false; // Not divisible by 4, hence not a leap year
//   }
// }

// console.log(isLeapYear(2020));
// console.log(isLeapYear(1900));
// console.log(isLeapYear(2000));

// //Ticket price
// function getTicketPrice(age) {
//   if (age <= 12) {
//     return 10; // Children (12 and under) pay $10
//   } else if (age >= 13 && age <= 17) {
//     return 15; // Teenagers (13 to 17) pay $15
//   } else if (age >= 18) {
//     return 20; // Adults (18 and over) pay $20
//   } else {
//     return "Not a valid age"; // Handles invalid ages
//   }
// }

// console.log(getTicketPrice(10)); // 10
// console.log(getTicketPrice(16)); // 15
// console.log(getTicketPrice(25)); // 20

// //. Fibonacci Sequence
// function fibonacci(n) {
//   if (n <= 1) {
//     return n; // if n is 0 or 1 returns n
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2); // return the sum of fibonacci(n - 1) and fibonacci(n - 2).
//   }
// }

// console.log(fibonacci(5));
// console.log(fibonacci(6));
// console.log(fibonacci(10));

function fibo(nums) {
  let n1 = 0,
    n2 = 1,
    nextNum;

  const fiboSeq = [n1, n2]; // Initialize an array to store the sequence

  for (let i = 3; i <= nums; i++) {
    nextNum = n1 + n2; // Calculate the next number in the sequence
    fiboSeq.push(nextNum); // Add the next number to the sequence
    n1 = n2; //Update n1 to be the value of n2
    n2 = nextNum; // Update n2 to be the next number in the sequence
  }
  return fiboSeq;
}
console.log(fibo(12));

// function fibonacci(n) {
//   const fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }
// console.log(fibonacci(7));
// console.log(fibonacci(2));

//Power function
function power(base, exponent) {
  // Base case: anything raised to the power of 0 is 1
  if (exponent === 0) return 1;

  // Handle negative exponents
  if (exponent < 0) {
    return 1 / power(base, -exponent);
  }

  // Recursive case: base ^ exponent = base * (base ^ (exponent - 1))
  return base * power(base, exponent - 1);
}
//The function uses recursion to calculate powers efficiently.
// It handles the base case (exponent 0) immediately.
// Negative exponents are handled by calling the function with the absolute value of the exponent and then taking the reciprocal of the result.
// The recursive approach builds up the calculation incrementally, avoiding redundant computations.
// This implementation works for integer exponents, but may overflow for very large numbers.
