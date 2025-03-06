// 1️⃣ Destructure from an array
const colors = ["red", "green", "blue", "yellow"];

// 👉 Extract the first two colors into variables `firstColor` and `secondColor`
// 👉 Store the rest of the colors in a variable called `otherColors`

const [firstColor, secondColor, ...otherColors] = colors;
console.log(firstColor, secondColor, otherColors);

// 2️⃣ Destructure from an object

const user = {
  name: "Alice",
  age: 25,
  address: {
    city: "New York",
    country: "USA",
  },
  hobbies: ["reading", "traveling", "gaming"],
};

// 👉 Extract `name` and `age` from the user object
// 👉 Extract `city` from the nested `address` object
// 👉 Extract the first hobby from the `hobbies` array and call it `firstHobby`

const {
  name,
  age,
  address: { city },
  hobbies: [firstHobby],
} = user;
console.log("Name: ", name, "Age: ", age, "City: ", city);
console.log("Hobbies: ", firstHobby);

// 3️⃣ Function Parameter Destructuring
const product = {
  title: "Laptop",
  price: 1200,
  details: {
    brand: "Dell",
    stock: 50,
  },
};

// 👉 Write a function `displayProduct` that takes the `product` object as a parameter
// 👉 Inside the function, use destructuring to extract `title`, `price`, and `brand`
// 👉 Console log: "Laptop by Dell costs $1200."
// Call the function here
function displayProduct(product) {
  const {
    title,
    price,
    details: { brand },
  } = product;
  console.log(`${title} by ${brand} cost $${price}`);
}

displayProduct(product);

// let a = 1;
// let b = 2;

// [a, b] - [b - a];

// console.log(a);
// console.log(b);

// const colors = ["red", "green", "black", "white", "yellow"];

//example 1:
// [colors[0], colors[4]] = [colors[4], colors[0]];
// console.log(colors);

//example 1.2:
// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);
