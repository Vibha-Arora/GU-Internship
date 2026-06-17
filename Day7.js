// Q1 
// Create your own Promise that resolves after 2 seconds with: 
// Hello World 

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World");
    }, 2000);
});

promise.then((result) => {
    console.log(result);
});

// Q2 
// Create a Promise that rejects after 3 seconds with: 

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Server Down");
    }, 3000);
});

promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

// Server Down 
// Q3 
// Create a Promise that randomly resolves or rejects. 

const promise = new Promise((resolve, reject) => {
    const random = Math.random();

    if (random > 0.5) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

// Output
// Success

// or

// Failed

// Q4 
// Create a Promise that checks age. 
// age >= 18 
// resolve 
// otherwise reject. 

function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Eligible");
        } else {
            reject("Not Eligible");
        }
    });
}

checkAge(20)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));

// Output
// Eligible


// Q5 
// Create a Promise that validates password length. 

function validatePassword(password) {
    return new Promise((resolve, reject) => {
        if (password.length >= 8) {
            resolve("Password Valid");
        } else {
            reject("Password Too Short");
        }
    });
}

validatePassword("mypassword")
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));

// Output
// Password Valid

// Q6 
// Create a Promise that validates email. 

function validateEmail(email) {
    return new Promise((resolve, reject) => {
        if (email.includes("@")) {
            resolve("Valid Email");
        } else {
            reject("Invalid Email");
        }
    });
}

validateEmail("ram@gmail.com")
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));

// Output
// Valid Email

// Q7 
// Create a Promise that simulates bank withdrawal. 

function withdraw(balance, amount) {
    return new Promise((resolve, reject) => {
        if (balance >= amount) {
            resolve(`Withdrawal Successful. Remaining Balance: ${balance - amount}`);
        } else {
            reject("Insufficient Balance");
        }
    });
}

withdraw(5000, 2000)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));

// Output
// Withdrawal Successful. Remaining Balance: 3000

// Q8 
// Create a Promise that simulates ATM transaction. 

function atmTransaction(pin) {
    return new Promise((resolve, reject) => {
        if (pin === 1234) {
            resolve("Transaction Approved");
        } else {
            reject("Invalid PIN");
        }
    });
}

atmTransaction(1234)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));

// Output
// Transaction Approved

// Q9 
// Create a Promise that resolves with user object. 

const userPromise = new Promise((resolve) => {
    resolve({
        id: 1,
        name: "Ram",
        email: "ram@gmail.com"
    });
});

userPromise.then((user) => {
    console.log(user);
});

// Output
// {
//   id: 1,
//   name: "Ram",
//   email: "ram@gmail.com"
// }

// Q10 
// Create a Promise that rejects with custom error object.

const promise = new Promise((resolve, reject) => {
    reject({
        code: 500,
        message: "Internal Server Error"
    });
});

promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

// Output
// {
//   code: 500,
//   message: "Internal Server Error"
// }

// Q11 
// Start with: 
// Promise.resolve(10) 
// Convert: 
// 10 
// ↓ 
// 20 
// ↓ 
// 40 
// ↓ 
// 80 
// Using chaining. 

Promise.resolve(10)
    .then(num => {
        console.log(num);
        return num * 2;
    })
    .then(num => {
        console.log(num);
        return num * 2;
    })
    .then(num => {
        console.log(num);
        return num * 2;
    })
    .then(num => {
        console.log(num);
    });

// Output
// 10
// 20
// 40
// 80

// Q12 
// Create a chain that converts: 
// Ram 
// ↓ 
// RAM 
// ↓ 
// RAM MOHAN 
// ↓ 
// RAM MOHAN DIXIT 

Promise.resolve("Ram")
    .then(name => {
        console.log(name);
        return name.toUpperCase();
    })
    .then(name => {
        console.log(name);
        return name + " MOHAN";
    })
    .then(name => {
        console.log(name);
        return name + " DIXIT";
    })
    .then(name => {
        console.log(name);
    });

// Output
// Ram
// RAM
// RAM MOHAN
// RAM MOHAN DIXIT

// Q13 
// Create a chain that processes product price. 
// 1000 
// ↓ 
// Add GST 
// ↓ 
// Apply Discount 
// ↓ 
// Final Price 

Promise.resolve(1000)
    .then(price => {
        console.log("Original Price:", price);
        return price + (price * 18 / 100); // GST
    })
    .then(price => {
        console.log("After GST:", price);
        return price - 100; // Discount
    })
    .then(finalPrice => {
        console.log("Final Price:", finalPrice);
    });

// Output
// Original Price: 1000
// After GST: 1180
// Final Price: 1080

// Q14 
// Create a chain for: 
// Login 
// ↓ 
// Get User 
// ↓ 
// Get Orders 
// ↓ 
// Get Payment 

function login() {
    return Promise.resolve("Login Successful");
}

function getUser() {
    return Promise.resolve("User Data");
}

function getOrders() {
    return Promise.resolve("Orders Data");
}

function getPayment() {
    return Promise.resolve("Payment Data");
}

login()
    .then(res => {
        console.log(res);
        return getUser();
    })
    .then(res => {
        console.log(res);
        return getOrders();
    })
    .then(res => {
        console.log(res);
        return getPayment();
    })
    .then(res => {
        console.log(res);
    });

// Q15 
// Create a chain for movie booking flow. 

Promise.resolve("Movie Selected")
    .then(msg => {
        console.log(msg);
        return "Seat Selected";
    })
    .then(msg => {
        console.log(msg);
        return "Payment Done";
    })
    .then(msg => {
        console.log(msg);
        return "Ticket Generated";
    })
    .then(msg => {
        console.log(msg);
    });

// Output
// Movie Selected
// Seat Selected
// Payment Done
// Ticket Generated

// // Q16 
// Create a chain for food ordering flow. 

Promise.resolve("Food Ordered")
    .then(msg => {
        console.log(msg);
        return "Food Cooked";
    })
    .then(msg => {
        console.log(msg);
        return "Food Packed";
    })
    .then(msg => {
        console.log(msg);
        return "Food Delivered";
    })
    .then(msg => {
        console.log(msg);
    });


// Q17 
// Create a chain for college admission flow. 

Promise.resolve("Form Submitted")
    .then(msg => {
        console.log(msg);
        return "Verification Completed";
    })
    .then(msg => {
        console.log(msg);
        return "Fee Paid";
    })
    .then(msg => {
        console.log(msg);
        return "Admission Confirmed";
    })
    .then(msg => {
        console.log(msg);
    });

// Q18 
// Create a chain for train ticket booking flow. 

Promise.resolve("Search Train")
    .then(msg => {
        console.log(msg);
        return "Select Seat";
    })
    .then(msg => {
        console.log(msg);
        return "Payment Successful";
    })
    .then(msg => {
        console.log(msg);
        return "Ticket Booked";
    })
    .then(msg => {
        console.log(msg);
    });

// Q19 
// Create a chain where each step waits 1 second. 

function wait(message) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, 1000);
    });
}

wait("Step 1")
    .then(() => wait("Step 2"))
    .then(() => wait("Step 3"))
    .then(() => wait("Step 4"));

// Output
// // Every 1 second

// Step 1
// Step 2
// Step 3
// Step 4

// Q20 
// Create a chain of 10 .then() calls. 

Promise.resolve(1)
    .then(num => {
        console.log(num);
        return num + 1;
    })
    .then(num => {
        console.log(num);
        return num + 1;
    })
    .then(num => {
        console.log(num);
        return num + 1;
    })
    .then(num => {
        console.log(num);
        return num + 1;
    })
    .then(num => {
        console.log(num);
        return num + 1;
    })
    .then(num => {
        console.log(num);
        return num + 1;
    })
    .then(num => {
        console.log(num);
        return num + 1;
    })
    .then(num => {
        console.log(num);
        return num + 1;
    })
    .then(num => {
        console.log(num);
        return num + 1;
    })
    .then(num => {
        console.log(num);
        return num + 1;
    })
    .then(num => {
        console.log(num);
    });

//     Output
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11

// Q21 
// Throw error inside first .then(). 
// Handle in catch. 

Promise.resolve("Start")
    .then((result) => {
        console.log(result);
        throw new Error("Something Went Wrong!");
    })
    .then(() => {
        console.log("This will not execute");
    })
    .catch((error) => {
        console.log("Caught Error:", error.message);
    });

// Output
// Start
// Caught Error: Something Went Wrong!    

// Q22 
// Throw error inside third .then(). 
// Observe skipped thens. 

Promise.resolve("Step 1")
    .then((result) => {
        console.log(result);
        return "Step 2";
    })
    .then((result) => {
        console.log(result);
        return "Step 3";
    })
    .then((result) => {
        console.log(result);
        throw new Error("Error at Step 3");
    })
    .then(() => {
        console.log("Step 4");
    })
    .then(() => {
        console.log("Step 5");
    })
    .catch((error) => {
        console.log("Caught:", error.message);
    });

// Output
// Step 1
// Step 2
// Step 3
// Caught: Error at Step 3

// Q23 
// Create chain: 
// Step1 
// ↓ 
// Step2 
// ↓ 
// Error 
// ↓ 
// Catch 

Promise.resolve()
    .then(() => {
        console.log("Step 1");
    })
    .then(() => {
        console.log("Step 2");
        throw new Error("Something Failed");
    })
    .then(() => {
        console.log("Step 3");
    })
    .catch((error) => {
        console.log("Catch:", error.message);
    });

// Output
// Step 1
// Step 2
// Catch: Something Failed

// Q24 
// Recover from error inside catch and continue chain. 

Promise.resolve()
    .then(() => {
        console.log("Step 1");
        throw new Error("Network Error");
    })
    .catch((error) => {
        console.log("Recovered From:", error.message);

        return "Fallback Data";
    })
    .then((data) => {
        console.log("Continue Chain:", data);
    });

// Output
// Step 1
// Recovered From: Network Error
// Continue Chain: Fallback Data

    
// Q25 
// Create multiple catches and observe which one executes.

Promise.resolve()
    .then(() => {
        throw new Error("First Error");
    })
    .catch((error) => {
        console.log("Catch 1:", error.message);
    })
    .catch((error) => {
        console.log("Catch 2:", error.message);
    });

// Output
// Catch 1: First Error

// Q26 
// Convert callback based greeting function into Promise. 

//Callback Version
function greetUser(name, callback) {
    callback(`Hello ${name}`);
}
//Promise Version
function greetUser(name) {
    return new Promise((resolve) => {
        resolve(`Hello ${name}`);
    });
}

greetUser("Ram")
    .then((message) => {
        console.log(message);
    });

// Output
// Hello Ram

// Q27 
// Convert callback based calculator into Promise. 

//Callback Version
function calculate(a, b, callback) {
    callback(a + b);
}
//Promise Version
function calculate(a, b) {
    return new Promise((resolve) => {
        resolve(a + b);
    });
}

calculate(20, 10)
    .then((result) => {
        console.log("Result:", result);
    });
// Output
// Result: 30

// Q28 
// Convert callback based login into Promise. 

//Callback Version
function login(username, password, callback) {
    if (username === "admin" && password === "1234") {
        callback(true);
    } else {
        callback(false);
    }
}
//Promise Version
function login(username, password) {
    return new Promise((resolve, reject) => {

        if (
            username === "admin" &&
            password === "1234"
        ) {
            resolve("Login Successful");
        } else {
            reject("Invalid Credentials");
        }

    });
}

login("admin", "1234")
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
// Output
// Login Successful

// Q29 
// Convert callback based file download simulation into Promise.

//Callback Version
function downloadFile(callback) {
    setTimeout(() => {
        callback("File Downloaded");
    }, 2000);
}
//Promise Version
function downloadFile() {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("File Downloaded Successfully");
        }, 2000);

    });
}

downloadFile()
    .then((message) => {
        console.log(message);
    });
// Output
// // After 2 sec

// File Downloaded Successfully

// Q30 
// Convert callback based weather API simulation into Promise.

//Callback Version
function fetchWeather(callback) {

    setTimeout(() => {

        callback({
            city: "Delhi",
            temp: "35°C"
        });

    }, 2000);
}
//Promise Version
function fetchWeather() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                city: "Delhi",
                temp: "35°C"
            });

        }, 2000);

    });
}

fetchWeather()
    .then((weather) => {
        console.log(weather);
    });
// Output
// {
//   city: "Delhi",
//   temp: "35°C"
// }

// Q31 
// Fetch: 
// User 
// Orders 
// Products 
// using Promise.all. 

const userPromise = Promise.resolve("User Data");
const ordersPromise = Promise.resolve("Orders Data");
const productsPromise = Promise.resolve("Products Data");

Promise.all([
    userPromise,
    ordersPromise,
    productsPromise
])
.then((results) => {
    console.log(results);
});

// Output
// [
//   "User Data",
//   "Orders Data",
//   "Products Data"
// ]

// Q32 
// Create 5 promises with different delays. 
// Run using Promise.all. 

const p1 = new Promise(res => setTimeout(() => res("P1"), 1000));
const p2 = new Promise(res => setTimeout(() => res("P2"), 2000));
const p3 = new Promise(res => setTimeout(() => res("P3"), 3000));
const p4 = new Promise(res => setTimeout(() => res("P4"), 4000));
const p5 = new Promise(res => setTimeout(() => res("P5"), 5000));

Promise.all([p1, p2, p3, p4, p5])
.then(console.log);

// Output (after 5 sec)
// ["P1","P2","P3","P4","P5"]

// Q33 
// Make one Promise reject. 
// Observe Promise.all behavior. 

const p1 = Promise.resolve("Success 1");
const p2 = Promise.reject("Failed");
const p3 = Promise.resolve("Success 3");

Promise.all([p1, p2, p3])
    .then(console.log)
    .catch(console.log);

// Output
// Failed

// Q34 
// Create dashboard loader using Promise.all. 

const profile = Promise.resolve("Profile");
const notifications = Promise.resolve("Notifications");
const messages = Promise.resolve("Messages");

Promise.all([
    profile,
    notifications,
    messages
])
.then(([p, n, m]) => {
    console.log("Dashboard Loaded");
    console.log(p);
    console.log(n);
    console.log(m);
});

// Q35 
// Build parallel file downloader using Promise.all. 
// LEVEL 6 (Q36-Q38) 
// Promise.allSettled() 

function download(file) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`${file} Downloaded`);
        }, 2000);
    });
}

Promise.all([
    download("file1.pdf"),
    download("file2.pdf"),
    download("file3.pdf")
])
.then(console.log);


// Q36 
// Create: 
// 3 Success 
// 2 Fail 
// Return all results. 

Promise.allSettled([
    Promise.resolve("Success 1"),
    Promise.resolve("Success 2"),
    Promise.resolve("Success 3"),
    Promise.reject("Fail 1"),
    Promise.reject("Fail 2")
])
.then(console.log);

// Output
// [
//  {status:"fulfilled", value:"Success 1"},
//  {status:"fulfilled", value:"Success 2"},
//  {status:"fulfilled", value:"Success 3"},
//  {status:"rejected", reason:"Fail 1"},
//  {status:"rejected", reason:"Fail 2"}
// ]

// Q37 
// Create admin dashboard loader. 
// Some APIs fail. 
// Still show remaining data. 

Promise.allSettled([
    Promise.resolve("Users"),
    Promise.reject("Orders API Failed"),
    Promise.resolve("Revenue"),
    Promise.reject("Analytics Failed")
])
.then(results => {
    results.forEach(result => {
        console.log(result);
    });
});


// Q38 
// Build batch upload simulator using Promise.allSettled. 
// LEVEL 7 (Q39) 
// Promise.race() & Promise.any() 

function upload(file) {
    return Math.random() > 0.5
        ? Promise.resolve(`${file} Uploaded`)
        : Promise.reject(`${file} Failed`);
}

Promise.allSettled([
    upload("File1"),
    upload("File2"),
    upload("File3"),
    upload("File4")
])
.then(console.log);

// Q39-A 
// Create: 
// Server1 → 5 sec 
// Server2 → 2 sec 
// Server3 → 1 sec 
// Return fastest response using race. 

const server1 = new Promise(res =>
    setTimeout(() => res("Server1"), 5000)
);

const server2 = new Promise(res =>
    setTimeout(() => res("Server2"), 2000)
);

const server3 = new Promise(res =>
    setTimeout(() => res("Server3"), 1000)
);

Promise.race([
    server1,
    server2,
    server3
])
.then(console.log);

// Output
// Server3

// Q39-B 
// Create: 
// Server1 → Reject 
// Server2 → Reject 
// Server3 → Resolve 
// Return first success using any. 
// LEVEL 8 

const server1 = Promise.reject("Server1 Failed");
const server2 = Promise.reject("Server2 Failed");

const server3 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Server3 Success");
    }, 1000);
});

Promise.any([
    server1,
    server2,
    server3
])
.then(console.log);

// Output
// Server3 Success

//(Q40) 
// �
// �
//  FINAL BOSS 
// Build a Complete Promise-Based Food Delivery System 
// Flow: 
// Login 
// ↓ 
// Fetch User 
// ↓ 
// Fetch Restaurants 
// ↓ 
// Fetch Menu 
// ↓ 
// Place Order 
// ↓ 
// Process Payment 
// ↓ 
// Generate Invoice 
// ↓ 
// Send Email 
// ↓ 
// Track Order 
// ↓ 
// Deliver Order 
// Requirements: 
// ✅
// Every step returns Promise 
// ✅
// Use chaining 
// ✅
// Handle failures 
// ✅
// Use catch propagation 
// ✅
// Use finally 
// ✅
// Simulate delays 
// ✅
// At least 3 random failure points 
// �
// �

function randomFail(step) {
    if (Math.random() < 0.3) {
        throw new Error(`${step} Failed`);
    }
}

function login() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Login Success");
            resolve();
        }, 1000);
    });
}

function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            randomFail("Fetch User");
            console.log("User Loaded");
            resolve();
        }, 1000);
    });
}

function fetchRestaurants() {
    return new Promise(resolve => {
        setTimeout(() => {
            randomFail("Restaurants");
            console.log("Restaurants Loaded");
            resolve();
        }, 1000);
    });
}

function fetchMenu() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Menu Loaded");
            resolve();
        }, 1000);
    });
}

function placeOrder() {
    return Promise.resolve(console.log("Order Placed"));
}

function processPayment() {
    return Promise.resolve(console.log("Payment Done"));
}

function generateInvoice() {
    return Promise.resolve(console.log("Invoice Generated"));
}

function sendEmail() {
    return Promise.resolve(console.log("Email Sent"));
}

function trackOrder() {
    return Promise.resolve(console.log("Tracking Started"));
}

function deliverOrder() {
    return Promise.resolve(console.log("Delivered"));
}

login()
.then(fetchUser)
.then(fetchRestaurants)
.then(fetchMenu)
.then(placeOrder)
.then(processPayment)
.then(generateInvoice)
.then(sendEmail)
.then(trackOrder)
.then(deliverOrder)
.catch(err => {
    console.log("ERROR:", err.message);
})
.finally(() => {
    console.log("Process Finished");
});

// IQ1 
// INTERVIEW OUTPUT ROUND (BONUS) 
Promise.resolve("A") 
.then(console.log); 
console.log("B"); 

// Output
// B
// A


// IQ2 
console.log("A"); 
Promise.resolve() 
.then(()=>{ 
console.log("B"); 
}); 
console.log("C"); 

// Output
// A
// C
// B

// IQ3 
Promise.resolve(10) 
.then(num=>num*2) 
.then(num=>num+5) 
.then(console.log); 

// Output
// 25

// IQ4 
Promise.reject("Error") 
.catch(console.log); 

// Output
// Error

// IQ5 
Promise.resolve() 
.then(()=>{ 
throw new Error("Boom"); 
}) 
.catch(err=>console.log(err.message)); 

// Output
// Boom

// IQ6 
Promise.resolve() 
.then(()=>{ 
return Promise.resolve(100); 
}) 
.then(console.log); 

// Output
// 100

// IQ7 
Promise.resolve() 
.then(()=>{ 
console.log("A"); 
}) 
.then(()=>{ 
console.log("B"); 
}); 

// Output
// A
// B

// IQ8 
Promise.all([ 
Promise.resolve(1), 
Promise.resolve(2), 
Promise.resolve(3) 
]) 
.then(console.log); 

// Output
// [1, 2, 3]

// IQ9 
Promise.all([ 
Promise.resolve(1), 
Promise.reject("Failed"), 
Promise.resolve(3) 
]) 
.catch(console.log); 

// Output
// Failed

// IQ10 
// Predict complete output: 
console.log("Start"); 
Promise.resolve() 
.then(()=>{ 
console.log("A"); 
return Promise.resolve("B"); 
}) 
.then(console.log); 
console.log("End");

// Output
// Start
// End
// A
// B