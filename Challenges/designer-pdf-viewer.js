// console.log(String.fromCharCode(65 + 25)) // Capital letters
// console.log(String.fromCharCode(97 + 25)) // Lowercase letters


const heights = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7]
const word = 'zaba';

function designerPdfViewer(h, word) {
  const letterValues = {};
  let maxHeight = 0;

  for (let i = 0; i < h.length; i++) {
    if (!letterValues[String.fromCharCode(97 + i)]) {
      letterValues[String.fromCharCode(97 + i)] = heights[i];
    }
  }

  for (let k = 0; k < word.split('').length; k++) {
    maxHeight = Math.max(letterValues[word[k]], maxHeight);
  }

  return (maxHeight * word.length);
}

console.log(designerPdfViewer(heights, word));