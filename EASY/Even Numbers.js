// Even Numbers: Write a function called findEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

// *************************************SOLUTION************************************************

let array = [92, 45, 78, 10, 31, 63, 55, 89, 23, 68, 3, 77,92, 48, 14, 96];

const evenElementArray = array.filter((ele) => {
  if (ele % 2 == 0) {
    return ele;
  }
});

console.log();