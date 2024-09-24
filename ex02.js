// Exercise 2: Write a function named 'filterByCategory' that takes an array of product objects and a category string, and returns a new array with products that belong to the given category.

function filterByCategory(products, category) {
  
  let filtration = [];

  for(let x = 0; x < products.length; x++)
  if (products[x].category === category) {
    filtration.push(products[x]);
  }
  
return filtration;
    // your code here

}

console.log(filterByCategory([{ name: 'Apple', category: 'Fruit' }, { name: 'Carrot', category: 'Vegetable' }], 'Vegetable')) // [{ name: 'Apple', category: 'Fruit' }]
