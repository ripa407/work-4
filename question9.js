// Question 9: Factorial Function
function factorial(value) {
  if (!Number.isInteger(value) || value < 0) {
    throw new RangeError("factorial expects a non-negative integer");
  }

  let result = 1;
  for (let i = 2; i <= value; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
