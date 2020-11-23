// Task
// Given an array, A, of N integers, print 

// A's elements in reverse order as a single line of space-separated numbers.

// Input Format

// The first line contains an integer, N
// (the size of our array).
// The second line contains N space-separated integers describing array

// A's elements.

// Constraints

// 1 <= N <= 1000
// 1 <= Ai <= 10000, where Ai is the i^th

// integer in the array.

// Output Format

// Print the elements of array A

// in reverse order as a single line of space-separated numbers.

// Sample Input

// 4
// 1 4 3 2

// Sample Output

// 2 3 4 1


function reverseOrder(arr, n = arr.length) {
    let str = '';
    
    for (let i = n - 1; i >= 0; i--) {
        str += arr[i];
        
        if (i >= 1) str += ' '
    }
    
    console.log(str);
}

reverseOrder([1, 4, 3, 2]);