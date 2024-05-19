var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
var priceSet1 = [1000, 900, 500];
var priceSet2 = [1250, 800, 750];
// combining 2 arrays into 1 by using spread operator and then sorted the array in ascending order
var combinedSortedArray = __spreadArray(__spreadArray([], priceSet1, true), priceSet2, true).sort(function (a, b) { return a - b; });
console.log("Sorted in Ascending order", combinedSortedArray);
// sorted in descending order
console.log("Sorted in descending order", combinedSortedArray.reverse());
