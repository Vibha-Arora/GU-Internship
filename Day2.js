// Day Two question 
// Predict Output
// Q1
 
let a = 10; 
 
function outer() { 
   let a = 20; 
 
   function inner() { 
       console.log(a); 
   } 
 
   inner(); 
} 
 
outer(); // output: 20
 
//  Q2  
let count = 1; 
 
function test() { 
   console.log(count); 
 
   let count = 2; 
} 
 
test(); // output: 1

// Q3
// Create a nested function structure of 4 levels and print variables from all parent scopes. 
// Expected: 
// 1 
// 2 
// 3 
// 4

function level1() {
    let a = 1;
    console.log(a);
    function level2() {
        let b = 2;
        console.log(b);
        function level3() {
            let c = 3;
            console.log(c);
            function level4() {
                let d = 4;
                console.log(d);
            }
            level4();
        }
        level3();
    }
    level2();
}
level1();

// Q4

// Write a function that returns another function and demonstrates lexical scope.

function outerFunction() {
    let outerVariable = 'I am from the outer function';
    return function innerFunction() {
        console.log(outerVariable);
    }
}

const innerFunc = outerFunction();
innerFunc(); // Output: I am from the outer function

// Q5

// Predict Output 
var x = 100; 
 
function a() { 
 
   console.log(x); 
 
   var x = 50; 
} 
 
a(); // Output: undefined

// Q6

// Create a function where a child function can access grandparent variables.

function grandparent(){
    let grandparentVar = "Hii";
    function parent(){
        let parentVar =" Hello";
        function child(){
            console.log(grandparentVar + parentVar);
        }
    }
    parent();
}
grandparent();

// Q7

// Predict Output
let name = "Ram"; 
 
function show() { 
 
   let name = "Mohan"; 
 
   return function() { 
 
       console.log(name); 
 
   } 
} 
 
show()(); // Output: Mohan

// Q8  
// Create a 3-level nested function and access all variables inside the innermost function.

function levelOne() {
    let var1 = "Level 1";
    function levelTwo() {
        let var2 = "Level 2";
        function levelThree() {
            let var3 = "Level 3";
            console.log(var1);
            console.log(var2);
            console.log(var3);
        }
        levelThree();
    }
    levelTwo();
}
levelOne();

// Q9

// Can a parent access a child variable? 
//  Demonstrate using code.

function parentFunction() {
    function childFunction() {
        let childVar = "I am a child variable";
        console.log(childVar);
    }
    childFunction();
}
parentFunction();

// In the above code, the parent function cannot access the child variable directly. The child variable is only accessible within the child function.

// Q10

//Create a private variable using lexical scope. 

function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

// In the above code, the variable `count` is a private variable that is only accessible through the returned function. Each time the returned function is called, it increments and returns the value of `count`.

// Q11
// Create a counter closure. 
// Output: 
// 1 
// 2 
// 3

function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3        

// q12

// Create a reverse counter. 
// Output: 
// 10 
// 9 
// 8 

function createReverseCounter() {
    let count = 10;
    return function() {
        count--;
        return count;
    };
}
const reverseCounter = createReverseCounter();
console.log(reverseCounter()); // Output: 9
console.log(reverseCounter()); // Output: 8
console.log(reverseCounter()); // Output: 7 

// Q13
// Create a closure-based bank account. 
// Methods: 
// deposit() 
// withdraw() 
// checkBalance() 

function createBankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit: function(amount) {
            balance += amount;
            console.log(`Deposited: ${amount}. New Balance: ${balance}`);
        },
        withdraw: function(amount) {
            if (amount > balance) {
                console.log('Insufficient funds');
            } else {
                balance -= amount;
                console.log(`Withdrew: ${amount}. New Balance: ${balance}`);
            }
        },
        checkBalance: function() {
            console.log(`Current Balance: ${balance}`);
        }
    };

}
// Q14 
// Create a closure that remembers the username forever.

function createUser(username) {
    return function() {
        console.log(`Username: ${username}`);
    };
}

const user = createUser('JohnDoe');
user(); // Output: Username: JohnDoe

// Q15

// Create a closure-based login attempt tracker. 
// After 3 failed attempts: 
// Account Locked
function createLoginTracker() {
    let attempts = 0;
    return function() {
        attempts++;
        if (attempts >= 3) {
            console.log('Account Locked');
        } else {
            console.log(`Login attempt ${attempts}`);
        }
    };
}
const loginTracker = createLoginTracker();
loginTracker(); // Output: Login attempt 1
loginTracker(); // Output: Login attempt 2
loginTracker(); // Output: Account Locked

// Q16

// Build a closure that stores a secret password. 
// Only getter should be available.

function createPasswordManager(password) {
    return {
        getPassword: function() {
            return password;
        }
    };
}

const passwordManager = createPasswordManager('mySecretPassword');
console.log(passwordManager.getPassword()); // Output: mySecretPassword

// Q17 
// Build a shopping cart using closure. 
// Methods: 
// addItem() 
// removeItem() 
// showItems()

function createShoppingCart() {
    let cart = [];
    return {
        addItem: function(item) {
            cart.push(item);
            console.log(`Item added: ${item}`);
        },
        removeItem: function(item) {
            const index = cart.indexOf(item);
            if (index !== -1) {
                cart.splice(index, 1);
                console.log(`Item removed: ${item}`);
            } else {
                console.log(`Item not found: ${item}`);
            }
        },
        showItems: function() {
            console.log('Shopping Cart:');
            cart.forEach((item, index) => {
                console.log(`${index + 1}. ${item}`);
            });
        }
    };
}
const shoppingCart = createShoppingCart();
shoppingCart.addItem('Apple');
shoppingCart.addItem('Banana');
shoppingCart.showItems();
// Q18 
// Create a closure-based voting machine. 
// Each user can vote only once. 

function createVotingMachine() {
    let votes = {};
    return {
        vote: function(user) {
            if (votes[user]) {
                console.log(`${user} has already voted.`);
            } else {
                votes[user] = true;
                console.log(`${user} has voted.`);
            }
        }
    };
}

const votingMachine = createVotingMachine();
votingMachine.vote('Alice'); // Output: Alice has voted.
votingMachine.vote('Bob'); // Output: Bob has voted.
votingMachine.vote('Alice'); // Output: Alice has already voted.    

// Q19
// Build a closure that counts how many times a function is executed.

function createExecutionCounter(func) {
    let count = 0;
    return function() {
        count++;
        console.log(`Function executed ${count} times.`);
        return func.apply(this, arguments);
    };
}
function exampleFunction() {
    console.log('Example function executed.');
}   
const countedFunction = createExecutionCounter(exampleFunction);
countedFunction();// Output: Function executed 1 times. Example function executed.
countedFunction();// Output: Function executed 2 times. Example function executed.
countedFunction();// Output: Function executed 3 times. Example function executed.

// Q20
// Build a closure-based expense tracker. 
// Methods: 
// addExpense() 
// getTotal()

function createExpenseTracker() {
    let expenses = [];
    return {
        addExpense: function(amount) {
            expenses.push(amount);
            console.log(`Expense added: $${amount}`);
        },
        getTotal: function() {
            const total = expenses.reduce((sum, expense) => sum + expense, 0);
            console.log(`Total Expenses: $${total}`);
        }
    };
}
const expenseTracker = createExpenseTracker();
expenseTracker.addExpense(50);// Output: Expense added: $50
expenseTracker.addExpense(30);// Output: Expense added: $30     
expenseTracker.getTotal(); // Output: Total Expenses: $80

// Q21 
// Create an IIFE that prints: 
// Welcome to JavaScript

(function() {
    console.log('Welcome to JavaScript');
}   )(); // Output: Welcome to JavaScript   

// Q22 
// Pass arguments to an IIFE and calculate area of rectangle.
(function(length, width) {
    const area = length * width;
    console.log(`Area of rectangle: ${area}`);
})(5, 3); // Output: Area of rectangle: 15

// Q23 
// Create an arrow function IIFE.

(() => {
    console.log('This is an arrow function IIFE');
}   )(); // Output: This is an arrow function IIFE

//Q24 
// Use IIFE to create private variables.
const counter = (function() {
    let count = 0;
    return {
        increment: function() {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement: function() {
            count--;
            console.log(`Count: ${count}`);
        }
    };
}   )();
counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2
counter.decrement(); // Output: Count: 1    

// Q25 
// Create a module pattern using IIFE. 
// Methods: 
// increment() 
// decrement() 
// reset()

const counterModule = (function() {
    let count = 0;  
    return {
        increment: function() {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement: function() {
            count--;
            console.log(`Count: ${count}`);
        },
        reset: function() {
            count = 0;
            console.log(`Count reset to: ${count}`);
        }
    };
}   )();
counterModule.increment(); // Output: Count: 1
counterModule.increment(); // Output: Count: 2
counterModule.decrement(); // Output: Count: 1
counterModule.reset(); // Output: Count reset to: 0 

// Q26 
// Create a function: 
// calculate(a,b,operation) 
// Perform: 
// add 
// subtract 
// multiply 
// divide 
function calculate(a, b, operation) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b !== 0) {
                return a / b;
            } else {
                return 'Cannot divide by zero';
            }   
        default:
            return 'Invalid operation';
    }
}
console.log(calculate(10, 5, 'add')); // Output: 15
console.log(calculate(10, 5, 'subtract'));// Output: 5
console.log(calculate(10, 5, 'multiply')); // Output: 50    
console.log(calculate(10, 5, 'divide')); // Output: 2
console.log(calculate(10, 0, 'divide')); // Output: Cannot divide by zero
console.log(calculate(10, 5, 'modulus')); // Output: Invalid operation  

// Q27 
// Create your own custom HOF named: 
// repeat() 
// Example 
// repeat(5, sayHello)

function repeat(times, func) {
    for (let i = 0; i < times; i++) {
        func();
    }
}
function sayHello() {
    console.log('Hello');
}
repeat(5, sayHello); // Output: Hello (5 times)

// Q28 
// Create a logger HOF. 
// Output: 
// [INFO] User Logged In

function logger(level, message) {
    console.log(`[${level}] ${message}`);
}   
logger('INFO', 'User Logged In'); // Output: [INFO] User Logged In

// Q29 
// Create a function execution timer using HOF. 
// Output: 
// Execution Time: XX ms

function executionTimer(func) {
    return function() {
        const start = performance.now();
        const result = func.apply(this, arguments);
        const end = performance.now();
        console.log(`Execution Time: ${end - start} ms`);
        return result;
    };
}
function exampleFunction() {
    // Simulate a time-consuming task
    for (let i = 0; i < 1e6; i++);
}
const timedExampleFunction = executionTimer(exampleFunction);
timedExampleFunction(); // Output: Execution Time: XX ms    

// Q30 
// Create a function wrapper that counts how many times another function was called. 

function callCounter(func) {
    let count = 0;
    return function() {
        count++;
        console.log(`Function called ${count} times.`);
        return func.apply(this, arguments);
    };
}
function exampleFunction() {
    console.log('Example function executed.');
}
const countedExampleFunction = callCounter(exampleFunction);
countedExampleFunction(); // Output: Function called 1 times.
countedExampleFunction(); // Output: Function called 2 times.
countedExampleFunction(); // Output: Function called 3 times.

// Q31 
// Given 
// const users = [ 
// {name:"Ram",age:25}, 
// {name:"Mohan",age:30}, 
// {name:"Amit",age:22} 
// ]; 
// Return: 
// [ 
// "Ram", 
// "Mohan", 
// "Amit" 
// ] 
// using map.

const users = [
    {name: "Ram", age: 25},
    {name: "Mohan", age: 30},
    {name: "Amit", age: 22}
];
const userNames = users.map(user => user.name);
console.log(userNames); // Output: ["Ram", "Mohan", "Amit"]

// Q32 
// Convert 
// [1,2,3,4,5] 
// into 
// [1,4,9,16,25] 
// using map.

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16, 25]

// Q33 
// Create an array of product names from: 
// [ 
// {name:"Laptop"}, 
// {name:"Mouse"}, 
// {name:"Keyboard"} 
// ] 

const products = [
    {name: "Laptop"},
    {name: "Mouse"},
    {name: "Keyboard"}
];
const productNames = products.map(product => product.name);
console.log(productNames); // Output: ["Laptop", "Mouse", "Keyboard"]   

// Q34 
// Filter all even numbers. 
// Input: 
// [1,2,3,4,5,6] 
// Output: 
// [2,4,6]

const nums = [1, 2, 3, 4, 5, 6];
const evenNumbers = nums.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

// Q35 
// Filter users whose age is greater than 25. 

const usersList = [
    {name: "Ram", age: 25},
    {name: "Mohan", age: 30},
    {name: "Amit", age: 22}
];
const filteredUsers = usersList.filter(user => user.age > 25);
console.log(filteredUsers); // Output: [{name: "Mohan", age: 30}]

// Q36 
// Filter expensive products. 
// Condition: 
// price > 1000

const productsList = [
    {name: "Laptop", price: 1500},
    {name: "Mouse", price: 50},
    {name: "Keyboard", price: 200}
];
const expensiveProducts = productsList.filter(product => product.price > 1000);
console.log(expensiveProducts); // Output: [{name: "Laptop", price: 1500}]

// Q37
// Find total sum. 
// Input: 
// [10,20,30,40] 
// Output: 
// 100
const numbersArray = [10, 20, 30, 40];
const totalSum = numbersArray.reduce((sum, num) => sum + num, 0);
console.log(totalSum); // Output:100

// Q38 
// Find maximum value using reduce. 
// Input: 
// [5,12,3,45,2] 
// Output: 
// 45

const values = [5, 12, 3, 45, 2];
const maxValue = values.reduce((max, num) => (num > max ? num : max), values[0]);
console.log(maxValue); // Output: 45

// Q39 
// Count total characters. 
// Input: 
// ["JavaScript","React","Node"] 
// Output: 
// 20
const strings = ["JavaScript", "React", "Node"];
const totalCharacters = strings.reduce((count, str) => count + str.length, 0);
console.log(totalCharacters); // Output: 
// 20


// Q40 
// ⭐
//  Ultra Hard 
// Given: 
// const orders = [ 
//    { 
//        id:1, 
//        amount:5000, 
//        status:"completed" 
//    }, 
//    { 
//        id:2, 
//        amount:2000, 
//        status:"pending" 
//    }, 
//    { 
//        id:3, 
//        amount:7000, 
//        status:"completed" 
//    }, 
//    { 
//        id:4, 
//        amount:1000, 
//        status:"completed" 
//    } 
// ]; 
// Using only: 
// filter() 
// map() 
// reduce() 
// Find: 
// 1. Completed Orders 
// 2. Total Revenue 
// 3. Average Revenue 
// 4. Highest Order Amount 
// 5. Array of Order IDs

const orders = [
    {id: 1, amount: 5000, status: "completed"},
    {id: 2, amount: 2000, status: "pending"},
    {id: 3, amount: 7000, status: "completed"},
    {id: 4, amount: 1000, status: "completed"}
];  
// 1. Completed Orders
const completedOrders = orders.filter(order => order.status === "completed");
console.log(completedOrders); // Output: [{id: 1, amount: 5000, status: "completed"}, {id: 3, amount: 7000, status: "completed"}, {id: 4, amount: 1000, status: "completed"}]
// 2. Total Revenue
const totalRevenue = completedOrders.reduce((sum, order) => sum + order.amount, 0);
console.log(totalRevenue);
// Output: 13000
// 3. Average Revenue
const averageRevenue = totalRevenue / completedOrders.length;
console.log(averageRevenue); // Output: 4333.33
// 4. Highest Order Amount
const highestOrderAmount = completedOrders.reduce((max, order) => (order.amount > max ? order.amount : max), completedOrders[0].amount);
console.log(highestOrderAmount); // Output: 7000
// 5. Array of Order IDs    
const orderIDs = orders.map(order => order.id);
console.log(orderIDs); // Output: [1, 2, 3, 4]
