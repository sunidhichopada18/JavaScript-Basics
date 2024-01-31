const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
//removes first element
groceryList.shift();
console.log(groceryList);
//adds element at first position
groceryList.unshift('popcorn');
console.log(groceryList);
//slice to use to slice few stuff out of an array
console.log(groceryList.slice(1, 4));
//console.log(groceryList) --> slice doesnt mutate the array
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

