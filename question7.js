// Question 7: Find the Largest Array Element
const numbers = [12, 45, 7, 89, 23, 56];
let largestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largestNumber) {
    largestNumber = numbers[i];
  }
}

console.log(`Largest number: ${largestNumber}`);
