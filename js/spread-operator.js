// 1️⃣ Copy an Array
const numbers = [1, 2, 3, 4, 5];

// 👉 Create a copy of the `numbers` array using the spread operator
// 👉 Store it in a variable called `copiedNumbers`
const copiedNumbers = [...numbers];
console.log(`Copied Array: ${copiedNumbers}`);

// // 2️⃣ Merge Two Arrays
const arr1 = [10, 20, 30];
const arr2 = [40, 50, 60];

// 👉 Merge `arr1` and `arr2` into a new array called `mergedArray`
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

// 3️⃣ Add Elements to an Array
const fruits = ["apple", "banana"];
// 👉 Create a new array called `newFruits` that adds "orange" at the beginning
const newFruits = ["orange ", ...fruits];
console.log(newFruits);

// 4️⃣ Copy an Object
const user = { name: "Alice", age: 25 };

// 👉 Create a copy of the `user` object and store it in `copiedUser`

// const copiedUser = ;
// console.log(copiedNumbers);

// 5️⃣ Merge Two Objects
const person = { name: "John", age: 30 };
const job = { title: "Developer", company: "TechCorp" };

// 👉 Merge `person` and `job` into a new object called `employee`

// 6️⃣ Update an Object Without Mutating It
const car = { brand: "Toyota", model: "Corolla", year: 2020 };

// 👉 Create a new object called `updatedCar` that changes `year` to 2023

// 7️⃣ Remove a Property from an Object
const book = { title: "JS Guide", author: "John Doe", pages: 300 };

// 👉 Create a new object called `bookWithoutPages` that removes the `pages` property

// 8️⃣ Use Spread in Function Arguments
const numbersList = [3, 7, 2, 9];

// 👉 Pass `numbersList` into `Math.max()` using the spread operator
// 👉 Store the result in `maxNumber`

// 9️⃣ Destructure and Spread Together
const student = { name: "Mike", grade: "A", age: 18 };

// 👉 Extract `name` and store the remaining properties in `rest`

// 🔟 Convert a String to an Array
const word = "HELLO";

// 👉 Convert `word` into an array of characters using spread and store in `letters`

// ✅ Expected Output
// Copied Array: [1, 2, 3, 4, 5]

// Merged Array: [10, 20, 30, 40, 50, 60]

// New Fruits Array: ["orange", "apple", "banana"]

// Copied User: { name: 'Alice', age: 25 }

// Merged Object: { name: 'John', age: 30, title: 'Developer', company: 'TechCorp' }

// Updated Car: { brand: 'Toyota', model: 'Corolla', year: 2023 }

// Book Without Pages: { title: 'JS Guide', author: 'John Doe' }

// Max Number: 9

// Student Info:
// Name: Mike
// Rest: { grade: 'A', age: 18 }

// Letters Array: ['H', 'E', 'L', 'L', 'O']
