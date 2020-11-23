// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Example

// candles = [4, 4, 1, 3] // Output: 2 (Explanation: there are two counts of 4 which is the tallest candle)

// The maximum height candles are units high. There are of them, so return

// .

// Function Description

// Complete the function birthdayCakeCandles in the editor below.

// birthdayCakeCandles has the following parameter(s):

//     int candles[n]: the candle heights

// Returns

//     int: the number of candles that are tallest

// Input Format

// The first line contains a single integer,
// , the size of .
// The second line contains space-separated integers, where each integer describes the height of

// .

// Constraints

// 1 <= n <= 10^5
// 1 <= candles[i] <= 10^7

// Sample Input 0

// 4
// 3 2 1 3

// Sample Output 0

// 2

// Candle heights are [3,2,1,3]. The tallest candles are 3 units, and there are 2 of them. 

function birthdayCakeCandles(candles) {
  // Write your code here
  const tallestCandle = Math.max(...candles);
  let count = 0;
  
  for (const candle of candles) {
      if (Number(candle) === tallestCandle) {
          count++;
      }
  }
  
  return count;
}

console.log(birthdayCakeCandles([3,2,1,3]));