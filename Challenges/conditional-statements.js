// Objective
// In this challenge, we're getting started with conditional statements. Check out the Tutorial tab for learning materials and an instructional video!

// Task
// Given an integer,

// , perform the following conditional actions:

//     If 

// is odd, print Weird
// If
// is even and in the inclusive range of to
// , print Not Weird
// If
// is even and in the inclusive range of to
// , print Weird
// If
// is even and greater than

//     , print Not Weird

// Complete the stub code provided in your editor to print whether or not

// is weird.

// Input Format

// A single line containing a positive integer,

// .

// Constraints

// Output Format

// Print Weird if the number is weird; otherwise, print Not Weird.

// Sample Input 0

// 3

// Sample Output 0

// Weird

// Sample Input 1

// 24

// Sample Output 1

// Not Weird


function checkIfWeird(num) {
  if (num >= 1 && num <= 100) { // is between 1 and 100
    if (num % 2 === 0) { // is even
      if (num >= 2 && num <= 5) { // and between 2 and 5 
        return 'Not Weird';
      } else if (num >= 6 && num <= 20) { // and between 6 and 20
        return 'Weird';
      } else if (num > 20) { // and greater than 20
        return 'Not Weird';
      }
    } else { // is odd
      return 'Weird';
    }
  }
};
  
console.log('Weird', checkIfWeird(1));
// console.log('Not Weird', checkIfWeird(2));
// console.log('Weird', checkIfWeird(3));
// console.log('Not Weird', checkIfWeird(4));
// console.log('Weird', checkIfWeird(5));
// console.log('Weird', checkIfWeird(6));
// console.log('Weird', checkIfWeird(7));
// console.log('Weird', checkIfWeird(8));
// console.log('Weird', checkIfWeird(9));
// console.log('Weird', checkIfWeird(10));
// console.log('Weird', checkIfWeird(11));
// console.log('Weird', checkIfWeird(12));
// console.log('Weird', checkIfWeird(13));
// console.log('Weird', checkIfWeird(14));
// console.log('Weird', checkIfWeird(15));
// console.log('Weird', checkIfWeird(16));
// console.log('Weird', checkIfWeird(17));
// console.log('Weird', checkIfWeird(18));
// console.log('Weird', checkIfWeird(19));
// console.log('Weird', checkIfWeird(20));
// console.log('Weird', checkIfWeird(21));
// console.log('Not Weird', checkIfWeird(22));
// console.log('Weird', checkIfWeird(23));
// console.log('Not Weird', checkIfWeird(24));