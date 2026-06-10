//Task 1 
// const college = "Geeta University";

// console.log(college);

//Task 2
// let num= 12;

// console.log("The value of num is: " + num);

// num= 13;
// console.log("The value of num is: " + num);

// num= 15;
// console.log("The value of num is: " + num);

// num= 2;
// console.log("The value of num is: " +  num);

//Task 3
// {
//     let message = "Hello ";
//     console.log(message); 
// }

// //console.log(message); 

//Task 4

// let a = 10;
// let b = 20;

// console.log("Before Swapping:");
// console.log("a =", a);
// console.log("b =", b);

// // Swapping
// [a, b] = [b, a];

// console.log("After Swapping:");
// console.log("a =", a);
// console.log("b =", b);

//Task 5
// Arrow function to return the cube of a number

// const cube = (num) => num * num * num;

// console.log(cube(5));

//Task 6
// Arrow function to check whether a number is even or odd

// const checkEvenOdd = (num) => {
//     return num % 2 === 0 ? "Even" : "Odd";
// };

// console.log(checkEvenOdd(10));
// console.log(checkEvenOdd(7));

//Task 7
// Arrow function to find the maximum of three numbers

// const findMax = (a, b, c) => {
//     return Math.max(a, b, c);
// };

// console.log(findMax(10, 25, 15));

//Task 8
// Array destructuring

// const nums = [10, 20, 30, 40, 50];

// const [first, second, ...remaining] = nums;

// console.log("First:", first);
// console.log("Second:", second);
// console.log("Remaining:", remaining);

//Task 9
// Function using template literals

// function greetUser(name, age) {
//     return `Hello ${name}, you are ${age} years old.`;
// }

// console.log(greetUser("Ram", 25));

//Task 10
// Generate URL dynamically using template literals

// const userId = 101;

// const url = `/api/users/${userId}`;

// console.log(url);

//Task 11
// Create an object

// const student = {
//     name: "Ram",
//     age: 25,
//     course: "MERN"
// };

// // Destructure all properties

// const { name, age, course } = student;

// console.log(name);
// console.log(age);
// console.log(course);

//Task 12

// Object

// const student = {
//     name: "Ram",
//     age: 25,
//     course: "MERN"
// };

// // Rename course to technology while destructuring

// const { name, age, course: technology } = student;

// console.log(name);
// console.log(age);
// console.log(technology);

//Task 13

// Function with a default parameter

// function createUser(name, role = "Student") {
//     return `Name: ${name}, Role: ${role}`;
// }

// console.log(createUser("Ram"));
// console.log(createUser("Mohan", "Admin"));

//Task 14

// Calculator function with default operation = "add"

// function calculator(a, b, operation = "add") {
//     switch (operation) {
//         case "add":
//             return a + b;
//         case "subtract":
//             return a - b;
//         case "multiply":
//             return a * b;
//         case "divide":
//             return a / b;
//         default:
//             return "Invalid Operation";
//     }
// }

// console.log(calculator(10, 5));              
// console.log(calculator(10, 5, "subtract"));
// console.log(calculator(10, 5, "multiply"));
// console.log(calculator(10, 5, "divide"));

//Task 15

// Function that receives unlimited numbers using Rest Operator

// function sumNumbers(...numbers) {
//     return numbers.reduce((sum, num) => sum + num, 0);
// }

// console.log(sumNumbers(10, 20, 30));
// console.log(sumNumbers(5, 10, 15, 20, 25));

//Task 16

// Function that receives unlimited numbers and returns the largest number

// function findLargest(...numbers) {
//     return Math.max(...numbers);
// }

// console.log(findLargest(10, 25, 5, 40, 15));

//Task 17

// Arrays

// const frontend = ["HTML", "CSS"];
// const backend = ["Node", "Express"];

// // Merge arrays using Spread Operator

// const fullStack = [...frontend, ...backend];

// console.log(fullStack);

// Task 18

// Original array

// const frontend = ["HTML", "CSS"];

// // Copy array and add one extra value

// const updatedFrontend = [...frontend, "JavaScript"];

// console.log(updatedFrontend);

//Task 19
// const user = {
//     name: "Ram",
//     email: "ram@gmail.com",
//     age: 25
// };

// const updatedUser = {
//     ...user,
//     email: "ram123@gmail.com"
// };

// console.log(updatedUser);

//Task 20

// const product = {
//     name: "Laptop",
//     price: 50000
// };

// const discountedProduct = {
//     ...product,
//     discount: 10
// };

// console.log(discountedProduct);

//Task 21
// const users = [
//     { name: "Ram", age: 25 },
//     { name: "Mohan", age: 30 },
//     { name: "Amit", age: 22 }
// ];

// const names = users.map(user => user.name);

// console.log(names);

//Task 22

// const users = [
//     { name: "Ram", age: 25 },
//     { name: "Mohan", age: 30 },
//     { name: "Amit", age: 22 }
// ];

// const filteredUsers = users.filter(user => user.age > 24);

// console.log(filteredUsers);

//Task 23

// const users = [
//     { name: "Ram", age: 25 },
//     { name: "Mohan", age: 30 },
//     { name: "Amit", age: 22 }
// ];

// const totalAge = users.reduce((sum, user) => sum + user.age, 0);

// console.log(totalAge);

//Task 24

// const createInvoice = (customerName, amount) => {
//     return `Invoice for ${customerName}: Amount Payable = ₹${amount}`;
// };

// console.log(createInvoice("Ram", 5000));

//Task 25
const student = {
    name: "Ram",
    marks: [80, 90, 70, 85]
};

// Destructuring
const { name, marks } = student;

// Arrow Function
const calculateTotal = (...nums) =>
    nums.reduce((sum, mark) => sum + mark, 0);

const total = calculateTotal(...marks);
const average = total / marks.length;

// Template Literals
console.log(`Student: ${name}`);
console.log(`Total: ${total}`);
console.log(`Average: ${average}`);