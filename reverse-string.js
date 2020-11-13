const reverseString = function(string) {
  let k = 0;
  
  for (let i = string.length - 1; i > Math.floor(string.length/2) - 1; i--, k++) {
    let temp1 = string[k];
    let temp2 = string[i];

    string[k] = temp2;
    string[i] = temp1;
  }

  return string;
};

const test = 'hello'.split('');
console.log(reverseString(test));