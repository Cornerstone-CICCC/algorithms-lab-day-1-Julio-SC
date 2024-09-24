// Exercise 7: Write a function named 'calculateAverage' that takes an array of numbers and returns the average value.

function calculateAverage(arr) {
  
  let averageValue = 0
  let totalNumber = 0
  for (let x = 0; x < arr.length; x++) {
    totalNumber += arr[x]
  }
    return averageValue = totalNumber / arr.length
}

console.log(calculateAverage([10, 20, 30, 40, 50])) // 30