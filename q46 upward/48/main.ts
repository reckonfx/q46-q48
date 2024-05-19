//Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
let priceSet1 = [1000,900,500];
let priceSet2 = [1250,800,750];
// combining 2 arrays into 1 by using spread operator and then sorted the array in ascending order
let combinedSortedArray = [...priceSet1,...priceSet2].sort((a,b) => a-b);

console.log("Sorted in Ascending order",combinedSortedArray);
// sorted in descending order
console.log("Sorted in descending order",combinedSortedArray.reverse());
