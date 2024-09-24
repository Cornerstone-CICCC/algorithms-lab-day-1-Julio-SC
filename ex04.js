// Exercise 4: Write a function named 'countOccurrences' that takes an array of strings and returns an object with the count of each string in the array.

function countOccurrences(arr) {   
  let fruits = {}

  for(let x = 0; x < arr.length; x++) {
    if (fruits[arr[x]] === undefined) {
      fruits[arr[x]] = 1
    } else {
      fruits[arr[x]]++
    }
  }

  return fruits
}

console.log(countOccurrences(['apple', 'banana', 'apple'])) // { apple: 2, banana: 1 }