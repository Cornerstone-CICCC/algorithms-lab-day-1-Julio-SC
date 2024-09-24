// Exercise 6: Write a function named 'uniqueValues' that takes an array of values and returns a new array with only unique values, removing duplicates.

function uniqueValues(arr) {
  
  let newArray = []
  for( let x = 0; x < arr.length; x++ ) {
    if(!newArray.includes(arr[x])) {
      newArray.push(arr[x])
    }
  }
  return newArray
}

console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5])) // [1, 2, 3, 4, 5]