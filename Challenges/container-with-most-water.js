// // Brute Force (O^n2)
// const getMostWater = (arr) => {
//   let a = 0;
//   let b = 1;
//   let maxWater = 0;

//   if (arr.length <= 1) return 0;

//   for (let i = 0; i < arr.length; i++) {
//     a = arr[i];

//     for (let k = 0; k < arr.length - 1; k++) {
//       b = arr[k + 1];

//       if ((Math.min(a, b) * ((k - i) + 1)) > maxWater) {
//         maxWater = (Math.min(a, b) * ((k - i) + 1));
//       };
//     }
//   }

//   return maxWater;
// };

///*****************///
///*****************///

// Shifting Two Pointers (O^n)
const getMostWater = (arr) => {
  let p1 = 0;
  let p2 = arr.length - 1;
  let maxWater = 0;
  
  while (p1 < p2) {
    const height = Math.min(arr[p1], arr[p2]);
    const width = p2 - p1;
    const water = height * width;
    maxWater = Math.max(maxWater, water);

    if (arr[p1] <= arr[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxWater;
};


const test = [1, 8, 6, 2, 9, 4];
const test2 = [7, 1, 2, 3, 9];
const test3 = [6, 9, 3, 4, 5, 8];
const test4 = []; // 0
const test5 = [1]; // 0

// area L x W
// console.log(getMostWater(test));
console.log(getMostWater(test2));
// console.log(getMostWater(test3));
console.log(getMostWater(test4));
console.log(getMostWater(test5));