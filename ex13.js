// Exercise 13: Write a function named 'findById' that takes an array of objects and an id, and returns the object with the matching id, or null if not found.

function findById(arr, id) {

let match = null

  for(let x = 0; x < arr.length; x++) {
    if(arr[x].id == id) {
      match = arr[x];
    }
}
return match
// your code here
}

console.log(findById([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }], 3)) // { id: 2, name: 'Jane' }