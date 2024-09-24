// Exercise 15: Write a function named 'countWords' that takes a string of text and returns the number of words in the string.

function countWords(text) {
  
  let total = 0

  for(x = 0; x < text.length; x++) {
    if(!text[x] === "") {
      total = text[x]
    }
  }
  
  return total
  // your code here
}

console.log(countWords('The quick brown fox jumps over the lazy dog')) // 9