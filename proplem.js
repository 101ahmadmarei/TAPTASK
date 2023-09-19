const missingNumber = (arr) => {
  const len = arr.length;
  const realSum = (len * (len + 1)) / 2;
  const arraySum = arr.reduce((a, b) => a + b);
  return realSum - arraySum;
};

console.log(myFunc([3, 0, 1]));
console.log(myFunc([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(myFunc([0, 1]));
console.log(myFunc([2, 3, 1]));
console.log(myFunc([2, 3, 1, 4]));
console.log(myFunc([2, 3, 1, 4, 0]));
