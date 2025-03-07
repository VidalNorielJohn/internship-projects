// const greetings = (person) => {
//   const name = person ? person.name : "Stranger";
//   return `Hello, ${name}`;
// };

// console.log(greetings(null));

// const age = 20;
// const person = "Adult";
// const greetings = age >= 18 ? `You're a ${person}` : "You're a Minor";

// console.log(greetings);

// let age = 12;
// let message = age >= 18 ? "Adult" : "Minor";

// console.log(message);

// let purchaseAmount = 125;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(
//   `You're Total is: $${purchaseAmount - purchaseAmount * (discount / 100)}`
// );

// 1. Check if a number is positive, negative, or zero
// Use a ternary operator to classify num as "Positive", "Negative", or "Zero".

const num = 0;
const check = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(`You're number is : ${check}`);

// 2. Determine if a person is eligible to drive
// Use a ternary operator to check if age is 18 or above.

const age = 17;
const eligibleDriver = age >= 18 ? "Eligible" : "Not Eligible";
console.log(eligibleDriver);

// 3. Check if a number is even or odd
// Use a ternary operator to determine if num2 is even or odd.

const num2 = 14.2;
const evenOrOdd =
  num2 % 2 === 0 ? "Even" : num2 % 3 === 0 ? "Odd" : "Not Valid";
console.log(evenOrOdd);

// 4. Assign a default username if none is provided
// Use a ternary operator to set username to "Guest" if it's an empty string.

const username = "Noriel";
const defUserName = username ? username : "Guest";
console.log(defUserName);

// 5. Compare two numbers and find the maximum
// Use a ternary operator to determine the greater of two numbers a and b.

const a = 12,
  b = 25;
const maxNum = a > b ? a : b;
console.log(maxNum);

// 6. Check if a string contains more than 10 characters
// Use a ternary operator to determine if str is "Long" or "Short".

const str = "HelloWorld!";
const checkStr = str.length > 10 ? "Long" : "Short";
console.log(checkStr);

// 7. Verify if a year is a leap year
// Use a ternary operator to check if year is a leap year (divisible by 4 and not 100, or divisible by 400).

const verifyLeap = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? "Leap Year"
    : "Not Leap Year";
console.log(verifyLeap);
console.log(verifyLeap(2024));
console.log(verifyLeap(2000));
console.log(verifyLeap(2100));
console.log(verifyLeap(2200));
console.log(verifyLeap(2400));
// 8. Categorize a person's BMI
// Use a ternary operator to classify BMI as "Underweight" (<18.5), "Normal" (18.5-24.9), or "Overweight" (≥25).

const getBMICategory = (bmi) =>
  bmi < 18.5
    ? "Underweight"
    : bmi <= 24.9
    ? "Normal"
    : bmi <= 29.9
    ? "Overweight"
    : bmi >= 30
    ? "Obese"
    : "Invalid BMI";

console.log(getBMICategory(22.5)); // Output: "Normal"
console.log(getBMICategory(17.0)); // Output: "Underweight"
console.log(getBMICategory(26.0)); // Output: "Overweight"
console.log(getBMICategory(32.0)); // Output: "Obese"
console.log(getBMICategory(-5)); // Output: "Invalid BMI"
