// Q1 
// Create your own function: 
// greetUser(name, callback) 
// Output: 
// Hello Ram 
// Welcome Ram

function greetUser(name, callback) {
    console.log("Hello " + name);
    callback(name);
}

function welcomeMessage(name) {
    console.log("Welcome " + name);
}

greetUser("Ram", welcomeMessage);

// Q2 
// Create: 
// calculate(a,b,callback) 
// Perform: 
// ● Add 
// ● Multiply 
// ● Divide 
// Using callback.

function calculate(a, b, callback) {
    return callback(a, b);
}

// Add
function add(a, b) {
    return a + b;
}

// Multiply
function multiply(a, b) {
    return a * b;
}

// Divide
function divide(a, b) {
    return a / b;
}

console.log("Addition:", calculate(10, 5, add));
console.log("Multiplication:", calculate(10, 5, multiply));
console.log("Division:", calculate(10, 5, divide));

// Output
// Addition: 15
// Multiplication: 50
// Division: 2

// Q3 
// Create a custom callback based calculator. 
// Input: 
// calculator(20,10,operation) 
// Output should depend on operation callback.

function calculator(a, b, operation) {
    return operation(a, b);
}

// Operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log("Add:", calculator(20, 10, add));
console.log("Subtract:", calculator(20, 10, subtract));
console.log("Multiply:", calculator(20, 10, multiply));
console.log("Divide:", calculator(20, 10, divide));

// Add: 30
// Subtract: 10
// Multiply: 200
// Divide: 2

// Q4 
// Create a function: 
// processStudent(student, callback) 
// Callback should print student details.

function processStudent(student, callback) {
    callback(student);
}

function printStudentDetails(student) {
    console.log("Name:", student.name);
    console.log("Age:", student.age);
    console.log("Course:", student.course);
}

const student = {
    name: "Ram",
    age: 20,
    course: "BCA"
};

processStudent(student, printStudentDetails);


// Output
// Name: Ram
// Age: 20
// Course: BCA

// Q5 
// Create a function: 
// downloadFile(callback) 
// Simulate file download after 2 sec. 

function downloadFile(callback) {
    console.log("Downloading file...");

    setTimeout(() => {
        callback();
    }, 2000);
}

function fileDownloaded() {
    console.log("File downloaded successfully!");
}

downloadFile(fileDownloaded);

// Output
// Downloading file...

// // After 2 seconds

// File downloaded successfully!

// Q6 
// Create: 
// registerUser(callback) 
// After registration callback should send welcome email. 

function registerUser(callback) {
    console.log("Registering user...");

    setTimeout(() => {
        console.log("User registered successfully!");
        callback();
    }, 2000);
}

function sendWelcomeEmail() {
    console.log("Welcome Email Sent!");
}

registerUser(sendWelcomeEmail);

// Output
// Registering user...

// // After 2 seconds

// User registered successfully!
// Welcome Email Sent!

// Q7 
// Create: 
// placeOrder(callback) 
// After order callback should generate invoice.

function placeOrder(callback) {
    console.log("Placing order...");

    setTimeout(() => {
        console.log("Order placed successfully!");
        callback();
    }, 2000);
}

function generateInvoice() {
    console.log("Invoice generated successfully!");
}

placeOrder(generateInvoice);

// Output
// Placing order...

// // After 2 seconds

// Order placed successfully!
// Invoice generated successfully!

// Q8 
// Create: 
// fetchUser(callback) 
// Return dummy user after 3 sec. 

function fetchUser(callback) {
    console.log("Fetching user...");

    setTimeout(() => {
        const user = {
            id: 1,
            name: "Ram",
            email: "ram@gmail.com"
        };

        callback(user);
    }, 3000);
}

function displayUser(user) {
    console.log("User Details:");
    console.log(user);
}

fetchUser(displayUser);

// Output
// Fetching user...

// // After 3 seconds

// User Details:
// {
//   id: 1,
//   name: "Ram",
//   email: "ram@gmail.com"
// }

// Q9 
// Create callback-based OTP verification. 

function verifyOTP(enteredOTP, callback) {
    const correctOTP = "1234";

    if (enteredOTP === correctOTP) {
        callback(true);
    } else {
        callback(false);
    }
}

verifyOTP("1234", (result) => {
    if (result) {
        console.log("OTP Verified Successfully!");
    } else {
        console.log("Invalid OTP!");
    }
});

// Output
// OTP Verified Successfully!
// If Wrong OTP
// verifyOTP("1111", callback);

// Output:

// Invalid OTP!


// Q10 
// Create callback-based login system.

function login(username, password, callback) {
    const validUsername = "admin";
    const validPassword = "12345";

    if (
        username === validUsername &&
        password === validPassword
    ) {
        callback(true);
    } else {
        callback(false);
    }
}

login("admin", "12345", (success) => {
    if (success) {
        console.log("Login Successful!");
    } else {
        console.log("Invalid Credentials!");
    }
});

// Output
// Login Successful!
// If Credentials are Wrong
// login("ram", "1111", callback);

// Output:

// Invalid Credentials!

// Q11 
// Predict output 
console.log("A"); 
setTimeout(()=>{ 
console.log("B"); 
},0); 
console.log("C"); 

// Output
// A
// C
// B


// Q12 
// Predict output 

setTimeout(()=>{ 
console.log(1); 
},1000); 
console.log(2); 


// Output
// 2
// 1

// Q13 
// Predict output 

console.log("Start"); 
setTimeout(()=>{ 
console.log("Timeout"); 
},0); 
console.log("End"); 

// Output
// Start
// End
// Timeout

// Q14 
// Create countdown: 
// 5 
// 4 
// 3 
// 2 
// 1 
// Boom 
// Using setTimeout. 

function countdown() {
    setTimeout(() => console.log(5), 1000);
    setTimeout(() => console.log(4), 2000);
    setTimeout(() => console.log(3), 3000);
    setTimeout(() => console.log(2), 4000);
    setTimeout(() => console.log(1), 5000);
    setTimeout(() => console.log("Boom!"), 6000);
}

countdown();

// Q15 
// Create digital bomb timer. 

let time = 10;

function bombTimer() {
    const interval = setInterval(() => {
        console.log(time);

        if (time === 0) {
            console.log("💥 Bomb Exploded!");
            clearInterval(interval);
        }

        time--;
    }, 1000);
}

bombTimer();

// Output
// 10
// 9
// 8
// ...
// 1
// 0
// 💥 Bomb Exploded!


// Q16 
// Create delayed greeting system. 
// User enters name. 
// After 2 sec greeting appears. 

function greetUser(name) {
    setTimeout(() => {
        console.log(`Hello ${name}!`);
    }, 2000);
}

greetUser("Ram");

// Output
// // After 2 sec

// Hello Ram!

// Q17 
// Create delayed notification system. 

function showNotification(message) {
    setTimeout(() => {
        console.log("🔔 Notification:", message);
    }, 3000);
}

showNotification("Your order has been shipped!");

// Output
// // After 3 sec

// 🔔 Notification: Your order has been shipped!

// Q18 
// Create delayed button disable feature. 

const button = {
    disabled: false
};

console.log("Button Enabled");

setTimeout(() => {
    button.disabled = true;
    console.log("Button Disabled");
}, 5000);

// Output
// Button Enabled

// // After 5 sec

// Button Disabled

// Q19 
// Create delayed redirect simulation. 

console.log("Redirecting in 3 seconds...");

setTimeout(() => {
    console.log("Redirected to Dashboard");
}, 3000);

// Output
// Redirecting in 3 seconds...

// // After 3 sec

// Redirected to Dashboard

// Q20 
// Create a function: 
// wait(seconds, callback)

function wait(seconds, callback) {
    setTimeout(() => {
        callback();
    }, seconds * 1000);
}

wait(3, () => {
    console.log("3 seconds completed!");
});

// Output
// // After 3 sec

// 3 seconds completed!

// Callback Hell 
// Q21 
// Simulate: 
// Login 
// ↓ 
// Get User 
// ↓ 
// Get Orders 
// ↓ 
// Show Orders 
// Using nested callbacks. 

function login(callback) {
    setTimeout(() => {
        console.log("Login Successful");
        callback();
    }, 1000);
}

function getUser(callback) {
    setTimeout(() => {
        console.log("User Data Fetched");
        callback();
    }, 1000);
}

function getOrders(callback) {
    setTimeout(() => {
        console.log("Orders Fetched");
        callback();
    }, 1000);
}

login(() => {
    getUser(() => {
        getOrders(() => {
            console.log("Showing Orders");
        });
    });
});


// Q22 
// Create callback hell with 5 nested levels. 

setTimeout(() => {
    console.log("Level 1");

    setTimeout(() => {
        console.log("Level 2");

        setTimeout(() => {
            console.log("Level 3");

            setTimeout(() => {
                console.log("Level 4");

                setTimeout(() => {
                    console.log("Level 5");
                }, 1000);

            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);


// Q23 
// Simulate food ordering system. 
// Order 
// ↓ 
// Cook 
// ↓ 
// Pack 
// ↓ 
// Deliver 

function orderFood(callback) {
    setTimeout(() => {
        console.log("Food Ordered");
        callback();
    }, 1000);
}

function cookFood(callback) {
    setTimeout(() => {
        console.log("Food Cooked");
        callback();
    }, 1000);
}

function packFood(callback) {
    setTimeout(() => {
        console.log("Food Packed");
        callback();
    }, 1000);
}

function deliverFood(callback) {
    setTimeout(() => {
        console.log("Food Delivered");
        callback();
    }, 1000);
}

orderFood(() => {
    cookFood(() => {
        packFood(() => {
            deliverFood(() => {
                console.log("Enjoy Your Meal!");
            });
        });
    });
});


// Q24 
// Simulate hospital process. 
// Registration 
// ↓ 
// Doctor 
// ↓ 
// Test 
// ↓ 
// Medicine 

function registration(callback) {
    setTimeout(() => {
        console.log("Registration Completed");
        callback();
    }, 1000);
}

function doctor(callback) {
    setTimeout(() => {
        console.log("Doctor Consultation Done");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Tests Completed");
        callback();
    }, 1000);
}

function medicine(callback) {
    setTimeout(() => {
        console.log("Medicine Issued");
        callback();
    }, 1000);
}

registration(() => {
    doctor(() => {
        test(() => {
            medicine(() => {
                console.log("Patient Process Completed");
            });
        });
    });
});

// Q25 
// Simulate college admission process. 
// Form 
// ↓ 
// Verification 
// ↓ 
// Payment 
// ↓ 
// Admission 

function fillForm(callback) {
    setTimeout(() => {
        console.log("Form Submitted");
        callback();
    }, 1000);
}

function verification(callback) {
    setTimeout(() => {
        console.log("Documents Verified");
        callback();
    }, 1000);
}

function payment(callback) {
    setTimeout(() => {
        console.log("Fee Paid");
        callback();
    }, 1000);
}

function admission(callback) {
    setTimeout(() => {
        console.log("Admission Confirmed");
        callback();
    }, 1000);
}

fillForm(() => {
    verification(() => {
        payment(() => {
            admission(() => {
                console.log("Welcome to College");
            });
        });
    });
});

// Q26 
// Create callback chain for: 
// Signup 
// ↓ 
// Verify Email 
// ↓ 
// Login 
// ↓ 
// Dashboard 

function signup(callback) {
    setTimeout(() => {
        console.log("Signup Successful");
        callback();
    }, 1000);
}

function verifyEmail(callback) {
    setTimeout(() => {
        console.log("Email Verified");
        callback();
    }, 1000);
}

function login(callback) {
    setTimeout(() => {
        console.log("Login Successful");
        callback();
    }, 1000);
}

signup(() => {
    verifyEmail(() => {
        login(() => {
            console.log("Dashboard Opened");
        });
    });
});

// Q27 
// Create nested callbacks with random delays. 

function randomTask(task, callback) {
    const delay = Math.floor(Math.random() * 3000);

    setTimeout(() => {
        console.log(task, "Completed in", delay, "ms");
        callback();
    }, delay);
}

randomTask("Task 1", () => {
    randomTask("Task 2", () => {
        randomTask("Task 3", () => {
            console.log("All Tasks Completed");
        });
    });
});

// Q28 
// Create callback-based weather fetching simulation. 

function fetchWeather(callback) {
    setTimeout(() => {
        const weather = {
            city: "Delhi",
            temperature: "35°C"
        };

        callback(weather);
    }, 2000);
}

fetchWeather((data) => {
    console.log("Weather Data:");
    console.log(data);
});

// Output
// Weather Data:
// {
//   city: "Delhi",
//   temperature: "35°C"
// }

// Q29 
// Create callback-based e-commerce checkout flow. 

function addToCart(callback) {
    setTimeout(() => {
        console.log("Item Added To Cart");
        callback();
    }, 1000);
}

function payment(callback) {
    setTimeout(() => {
        console.log("Payment Successful");
        callback();
    }, 1000);
}

function placeOrder(callback) {
    setTimeout(() => {
        console.log("Order Placed");
        callback();
    }, 1000);
}

addToCart(() => {
    payment(() => {
        placeOrder(() => {
            console.log("Order Confirmed");
        });
    });
});

// Q30 
// Create callback-based movie booking flow.

function selectMovie(callback) {
    setTimeout(() => {
        console.log("Movie Selected");
        callback();
    }, 1000);
}

function selectSeat(callback) {
    setTimeout(() => {
        console.log("Seat Selected");
        callback();
    }, 1000);
}

function makePayment(callback) {
    setTimeout(() => {
        console.log("Payment Successful");
        callback();
    }, 1000);
}

function generateTicket(callback) {
    setTimeout(() => {
        console.log("Ticket Generated");
        callback();
    }, 1000);
}

selectMovie(() => {
    selectSeat(() => {
        makePayment(() => {
            generateTicket(() => {
                console.log("Enjoy Your Movie!");
            });
        });
    });
});

// setInterval 
// Q31 
// Create live clock. 

function liveClock() {
    setInterval(() => {
        const time = new Date().toLocaleTimeString();
        console.log(time);
    }, 1000);
}

liveClock();

// Output
// 10:30:01 AM
// 10:30:02 AM
// 10:30:03 AM
// ...

// Q32 
// Create stopwatch. 
// Start 
// Pause 
// Reset 

let seconds = 0;
let timer = null;

function start() {
    timer = setInterval(() => {
        seconds++;
        console.log(seconds);
    }, 1000);
}

function pause() {
    clearInterval(timer);
}

function reset() {
    clearInterval(timer);
    seconds = 0;
    console.log("Reset:", seconds);
}

// Output
// 1
// 2
// 3
// 4
// Pause

// Reset: 0

// Q33 
// Create traffic light simulation. 
// Red 
// ↓ 
// Yellow 
// ↓ 
// Green 
// Repeat forever. 

let lights = ["🔴 Red", "🟡 Yellow", "🟢 Green"];
let index = 0;

setInterval(() => {
    console.log(lights[index]);

    index++;

    if (index === lights.length) {
        index = 0;
    }
}, 2000);

// Output
// 🔴 Red
// 🟡 Yellow
// 🟢 Green
// 🔴 Red
// 🟡 Yellow
// 🟢 Green
// ...

// Q34 
// Create auto slider. 
// Every 3 sec image changes.

const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
];

let current = 0;

setInterval(() => {
    console.log(images[current]);

    current++;

    if (current === images.length) {
        current = 0;
    }
}, 3000);

// Output
// image1.jpg
// image2.jpg
// image3.jpg
// image1.jpg
// ...


// Q35 
// Create typing effect animation. 
// Example: 
// Hello World 
// One character at a time.

const text = "Hello World";
let index = 0;

const typing = setInterval(() => {
    process.stdout.write(text[index]);

    index++;

    if (index === text.length) {
        clearInterval(typing);
    }
}, 300);

// Visual Output
// H
// He
// Hel
// Hell
// Hello
// Hello
// Hello W
// Hello Wo
// Hello Wor
// Hello Worl
// Hello World

// Q36 
// Predict Output 
// console.log("A"); 
// setTimeout(()=>{ 
// console.log("B"); 
// },1000); 
// setTimeout(()=>{ 
// console.log("C"); 
// },0); 
// console.log("D"); 

console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

setTimeout(() => {
    console.log("C");
}, 0);

console.log("D");

// Output
// A
// D
// C
// B

// Q37 
// Predict Output 
// function one(){ 
// console.log("One"); 
// } 
// setTimeout(one,0); 
// console.log("Two"); 

function one() {
    console.log("One");
}

setTimeout(one, 0);

console.log("Two");

// Output
// Two
// One

// Q38 
// Predict Output 
// console.log("Start"); 
// for(let i=0;i<1000000000;i++){} 
// setTimeout(()=>{ 
// console.log("Timeout"); 
// },0); 
// console.log("End"); 

console.log("Start");

for(let i = 0; i < 1000000000; i++) {}

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");

// Output
// Start
// End
// Timeout


