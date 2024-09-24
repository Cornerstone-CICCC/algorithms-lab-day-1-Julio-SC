// Exercise 14: Write a function named 'mergeArrays' that takes two arrays and returns a new array that combines the elements of both arrays, alternating between them.

function mergeArrays(arr1, arr2) {
  
  let merging = []

  for(let x = 0; x < arr1.length; x++) {
    merging.push(arr1[x], arr2[x])
  }
  
  return merging
  // your code here
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6])) // [1, 2, 3, 4, 5, 6]