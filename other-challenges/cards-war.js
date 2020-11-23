function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  const alecHand = A.split('');
  const bobHand = B.split('');

  let alecCurrentCardValue = 0;
  let bobCurrentCardValue = 0;

  let alecPoints = 0;
  let bobPoints = 0;
  
  for (let i = 0; i < alecHand.length; i++) {

    // Convert each player's current card to a numbered value
      if (alecHand[i] === 'J') {
        alecCurrentCardValue = 11;
      } else if (alecHand[i] === 'Q') {
        alecCurrentCardValue = 12;
      } else if (alecHand[i] === 'K') {
        alecCurrentCardValue = 13;
      } else if (alecHand[i] === 'A') {
        alecCurrentCardValue = 14;
      } else {
        alecCurrentCardValue = Number(alecHand[i]);
      }

      if (bobHand[i] === 'J') {
        bobCurrentCardValue = 11;
      } else if (bobHand[i] === 'Q') {
        bobCurrentCardValue = 12;
      } else if (bobHand[i] === 'K') {
        bobCurrentCardValue = 13;
      } else if (bobHand[i] === 'A') {
        bobCurrentCardValue = 14;
      } else {
        bobCurrentCardValue = Number(bobHand[i]);
      }
      
      // Check winner of current turn and add points to winner
      if (alecCurrentCardValue === bobCurrentCardValue) {
        break; // Do nothing, move onto next turn
      } else if (alecCurrentCardValue > bobCurrentCardValue) {
        alecPoints++;
      } else {
        bobPoints++;
      }
  }

  // After for loop is done, check overall winner and return points
  if (alecPoints === bobPoints) {
    return `It's a draw!`
  } else if (alecPoints > bobPoints) {
    return alecPoints;
  } else if (bobPoints > alecPoints) {
    return bobPoints;
  }
}

console.log(solution('23A84Q', 'K2Q25J'));