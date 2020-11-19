// Objective
// In this challenge, we're going to learn about the difference between a class and an instance; because this is an Object Oriented concept, it's only enabled in certain languages. Check out the Tutorial tab for learning materials and an instructional video!

// Task
// Write a Person class with an instance variable,
// , and a constructor that takes an integer, , as a parameter. The constructor must assign to after confirming the argument passed as is not negative; if a negative argument is passed as , the constructor should set to

// and print Age is not valid, setting age to 0.. In addition, you must write the following instance methods:

//     yearPasses() should increase the 

// instance variable by
// .
// amIOld() should perform the following conditional actions:

//     If 

// , print You are young..
// If
// and

//         , print You are a teenager..
//         Otherwise, print You are old..

// To help you learn by example and complete this challenge, much of the code is provided for you, but you'll be writing everything in the future. The code that creates each instance of your Person class is in the main method. Don't worry if you don't understand it all quite yet!

// Note: Do not remove or alter the stub code in the editor.

// Input Format

// Input is handled for you by the stub code in the editor.

// The first line contains an integer,
// (the number of test cases), and the subsequent lines each contain an integer denoting the

// of a Person instance.

// Constraints

// Output Format

// Complete the method definitions provided in the editor so they meet the specifications outlined above; the code to test your work is already in the editor. If your methods are implemented correctly, each test case will print
// or lines (depending on whether or not a valid

// was passed to the constructor).

// Sample Input

// 4
// -1
// 10
// 16
// 18

// Sample Output

// Age is not valid, setting age to 0.
// You are young.
// You are young.

// You are young.
// You are a teenager.

// You are a teenager.
// You are old.

// You are old.
// You are old.


class Person {
  // Add some more code to run some checks on initialAge
  constructor(initialAge) {
    
    function initializeAge(age) {
      if (age < 0 ) console.log('Age is not valid, setting age to 0.');

      return (age > 0 ? age : 0);
    };

    this.age = initializeAge(initialAge);  
  };

  amIOld() {
    // Do some computations in here and print out the correct statement to the console
    if (this.age < 13) {
      console.log('You are young.');
    } else if (this.age >= 13 && this.age < 18) {
      console.log('You are a teenager.');
    } else {
      console.log('You are old.');
    }
  };

  yearPasses() {
    // Increment the age of the person in here
    this.age++;
  };
};

const bob = new Person(18);

// console.log(bob.amIOld());
console.log(bob.yearPasses());
console.log(bob.age);