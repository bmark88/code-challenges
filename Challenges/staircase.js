// Staircase detail

// This is a staircase of size n = 4:

//    #
//   ##
//  ###
// ####

// Its base and height are both equal to

// . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size

// .

// Function Description

// Complete the staircase function in the editor below.

// staircase has the following parameter(s):

//     int n: an integer

// Print

// Print a staircase as described above.

// Input Format

// A single integer,

// , denoting the size of the staircase.

// Constraints

// 0 < n <= 100.

// Output Format

// Print a staircase of size

// using # symbols and spaces.

// Note: The last line must have 0

// spaces in it.

// Sample Input

// 6 

// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######


function staircase(n) {
  let stairs = '';

  for (let i = n; i > 0; i--) {
    stairs += ' ';
  }

  stairs = stairs.split('');

  for (let i = stairs.length; i > 0; i--) {
    stairs[i - 1] = '#';

    console.log(stairs.join(''));
  }
}

staircase(6);