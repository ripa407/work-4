// Question 10: Check for a Prime Number
function isPrime(value) {
  if (!Number.isInteger(value) || value <= 1) {
    return false;
  }

  for (let divisor = 2; divisor * divisor <= value; divisor++) {
    if (value % divisor === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(1));
