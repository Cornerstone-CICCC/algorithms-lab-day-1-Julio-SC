// Exercise 11: Write a function named 'reverseWords' that takes a string of 
//text and returns the string with the order of the words reversed.

function reverseWords(text) {
  let nt = text.split(" ")
  let reversing = nt.reverse();

return reversing
}
  

console.log(reverseWords('The quick brown fox')) // 'fox brown quick The'