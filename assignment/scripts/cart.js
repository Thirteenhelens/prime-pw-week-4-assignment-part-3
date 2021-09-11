console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable named `basket` and set it to an empty array.
let basket = [];

// Create a function called `addItem`. It should: take an input parameter for a string `item`
// add the new item to the global array `basket`. Return `true` indicating the item was added
function addItem ( item ) {
  basket.push(String(item));
    return true;
}

console.log(`Basket is ${basket}`);
console.log('Adding apples - should be true:', addItem('apples'));
console.log(`Basket is now ${basket}`);


// Create a function called `listItems`. It should: loop over the items in the `basket` array
// console.log each individual item on a new line.
function listItems () {
  for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
  }
}

console.log('listItems - should be apples, pears, carrots, peaches ');
addItem('pears');
addItem('carrots');
addItem('peaches');
listItems();
// Not sure how to test listItems better, any recommendations?


// Create a function called `empty`. It should: reset the `basket` to an empty array
// Sorry for breaking D.R.Y. !!

// Option 1 (best for what was specifically asked):
function empty () {
  return basket = [];
}

console.log('empty - should be empty:', empty());

// Option 2 (bet for general usage):
function empty (arr) {
  return arr = [];
}

console.log('empty - should be empty:', empty(basket));

//Stretch Goals:
// 1. Add a global `const` named `maxItems` and set it to 5.
const maxItems = 5

console.log('maxItems - should be 5:', maxItems);

// 2. Create a function called isFull(). It should: return `false` if the basket contains *less*
// than max number of items, and return `true` otherwise (equal or more than maxItems)
function isFull () {
  if (basket.length < maxItems) {
    return false;
  } else if (basket.length >= maxItems) {
    return true;
  }
}

basket = [1, 2, 3, 4];
console.log('isFull - should return false:', isFull());
basket = [1, 2, 3, 4, 5, 6];
console.log('isFull - should return true:', isFull());
basket = [1, 2, 3, 4, 5];
console.log('isFull (for redundancy)- should return true:', isFull());

//3. Update the required `addItem` function to: Use the `isFull` function to prevent more than
// `maxItems` from being added to the basket. If an item was added to the array, return `true`
// If there was no room and the item could not be added return `false`
basket = [];

function addItem ( item ) {
  if (isFull() === false) {
    basket.push(item);
    return true;
  } else if (isFull() === true) {
    return false;
  }
}

console.log(`Basket is ${basket}`);
console.log('Adding apples - should be true:', addItem('apples'));
console.log(`Basket is now ${basket}`);


/* switch (isFull()) {
  default:
    console.log('Please add an item to the basket.');
  break;
  case false:
    basket.push(item);
      return true;
  break;
  case true:
    return false;
  break;
}
*/

// 4. Create a function called `removeItem`. It should: Take an input parameter for a string `item`
// Use [Array.indexOf] to find the index of the first matching item in the basket,
// Use [Array.splice] to remove the first matching item from the basket,
// and Return the item removed or `null` if the item was not found.
  function removeItem ( item ) {
    
  }
