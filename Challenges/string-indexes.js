// Output Format

// For each String, print even-indexed characters, followed by a space, followed by odd-indexed characters.

// Sample Input

// 2
// Hacker
// Rank

// Sample Output

// Hce akr
// Rn ak


function processData(input) {
  const individualWords = input.split('\n');
  const scrambledWords = {};

  for (let i = 1; i < individualWords.length; i++) {
    if (!scrambledWords[individualWords[i]]) {
      scrambledWords[i] = { 
        word: individualWords[i], 
        even: [], 
        odd: [] 
      };
    }
  }

  for (const word of Object.values(scrambledWords)) {

    for (let k = 0; k < word.word.length; k++) {
      if (k % 2 === 0) word.even.push(word.word[k]);
      if (k % 2 !== 0) word.odd.push(word.word[k]);
    }

    console.log(`${word.even.join('')} ${word.odd.join('')}`);
  }
};

processData(`2
Hacker
Rank`);