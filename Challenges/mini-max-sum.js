// This first function failed 1 of 15 test cases - test case is unknown
// If the bug is found, please add a comment with an explanation
const miniMaxSum = (nums) => {
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  const otherNums = [];

  for (let i = 0; i < 5; i++) {
    if (nums[i] !== min && nums[i] !== max) {
      otherNums.push(nums[i]);
    }
  }

  for (let k = 0; k < 3; k++) {
    min += otherNums[k];
    max += otherNums[k];
  }

  console.log(min, max);
};

//*****************//
//*****************//

// // // Two Liner
// const miniMaxSum = (nums) => {
//   const sum = nums.reduce((acc, next) => acc + next, 0);
//   console.log(sum - Math.max(...nums), sum - Math.min(...nums));
// };

const arr = [1, 3, 5, 7, 9];
const arr2 = [1, 2, 3, 4, 5];
miniMaxSum(arr);
// miniMaxSum(arr2);