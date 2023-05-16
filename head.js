const head = function(arr) {
for (let i = 0; i < arr.length; i++) {
  if (arr.length === 0) {
    return undefined;
  } else if (arr.length !== 0) {
    return arr[0]
  }
}
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`;
  }
};

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([5]), 5));
console.log(assertEqual(head([]), 5));
console.log(assertEqual(head([]), undefined));


