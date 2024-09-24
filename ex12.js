// Exercise 12: Write a function named 'filterAdults' that takes an array of user objects (each with an 'age' property) and returns a new array with only the users who are 18 or older.

function filterAdults(users) {
  
  let newArray = []

  for(let x = 0; x < users.length; x++){
    if(users[x].age >= 18) {
      newArray.push(users[x])
    }
  }
return newArray
  // your code here
}

console.log(filterAdults([{ name: 'Jane', age: 18 }, { name: 'Joe', age: 19 }, { name: 'Jim', age: 17 }])) // [{ name: 'Jane', age: 18 }, { name: 'Joe', age: 19 }]