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
console.log('Adding apples - should be apples:', addItem('apples'));
console.log(`Basket is now ${basket}`);


// Create a function called `listItems`. It should: loop over the items in the `basket` array
// console.log each individual item on a new line.
function listItems () {
  
}

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

/*
Stretch Goals:
 1. Add a global `const` named `maxItems` and set it to 5.

 2. Create a function called isFull(). It should:
  - return `false` if the basket contains *less* than max number of items
  - return `true` otherwise (equal or more than maxItems)

3. Update the required `addItem` function to:
  - Use the `isFull` function to prevent more than `maxItems` from being added to the basket.
  - If an item was added to the array, return `true`
  - If there was no room and the item could not be added return `false`
*/
