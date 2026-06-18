// Q1 
// Create an async function that returns: 
// Hello World 

async function greet() {
  return "Hello World";
}

greet().then(console.log);

// Output
// Hello World

// Q2 
// Create an async function that returns a user object.

async function getUser() {
  return {
    id: 1,
    name: "Vibha"
  };
}

getUser().then(console.log);

// Output
// { id: 1, name: 'Vibha' }

// // Q3 
// Create an async function that returns an array of products. 

async function getProducts() {
  return ["Laptop", "Mobile", "Headphones"];
}

getProducts().then(console.log);

// Output
// [ 'Laptop', 'Mobile', 'Headphones' ]

// Q4 
// Create an async function that returns current date. 

async function getDate() {
  return new Date();
}

getDate().then(console.log);

// Output
// 2026-06-18T10:30:00.000Z

// Q5 
// Create an async function that returns random number. 

async function getRandom() {
  return Math.floor(Math.random() * 100);
}

getRandom().then(console.log);

// Output
// 57

// Q6 
// Create an async function that returns student details. 

async function getStudent() {
  return {
    id: 101,
    name: "Vibha",
    course: "B.Tech"
  };
}

getStudent().then(console.log);

// Output
// {
//   id: 101,
//   name: 'Vibha',
//   course: 'B.Tech'
// }

// Q7 
// Create an async function that returns company details. 

async function getCompany() {
  return {
    name: "Google",
    location: "USA"
  };
}

getCompany().then(console.log);

// Output
// {
//   name: 'Google',
//   location: 'USA'
// }

// Q8 
// Create an async function that returns cart items. 

async function getCart() {
  return ["Laptop", "Mouse", "Keyboard"];
}

getCart().then(console.log);

// Output
// [ 'Laptop', 'Mouse', 'Keyboard' ]

// Q9 
// Create an async function that returns total order amount.

async function getTotalAmount() {
  return 5000;
}

getTotalAmount().then(console.log);

// Output
// 5000

// Q10 
// Create an async function and verify it always returns Promise. 
// LEVEL 2 (Q11-Q20) 
// Await Basics 

async function demo() {
  return "Success";
}

const result = demo();

console.log(result instanceof Promise);

result.then(console.log);

// Output
// true
// Success

// Q11 
// Create: 
// getUser() 
// Use await to print user. 

async function getUser() {
  return {
    id: 1,
    name: "Vibha"
  };
}

async function main() {
  const user = await getUser();
  console.log(user);
}

main();

// Output
// { id: 1, name: 'Vibha' }

// Q12 
// Create: 
// getProduct() 
// Use await. 

async function getProduct() {
  return {
    id: 101,
    name: "Laptop"
  };
}

async function main() {
  const product = await getProduct();
  console.log(product);
}

main();

// Output
// { id: 101, name: 'Laptop' }

// Q13 
// Create: 
// getOrders() 
// Use await. 

async function getOrders() {
  return ["Order1", "Order2", "Order3"];
}

async function main() {
  const orders = await getOrders();
  console.log(orders);
}

main();

// Output
// [ 'Order1', 'Order2', 'Order3' ]

// Q14 
// Create: 
// getPayment() 
// Use await. 

async function getPayment() {
  return {
    paymentId: "PAY123",
    status: "Success"
  };
}

async function main() {
  const payment = await getPayment();
  console.log(payment);
}

main();

// Output
// { paymentId: 'PAY123', status: 'Success' }

// Q15 
// Create delay function: 
// wait(2000) 
// Using Promise. 

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function main() {
  console.log("Waiting...");
  await wait(2000);
  console.log("Done");
}

main();

// Output
// Waiting...
// (after 2 sec)
// Done

// Q16 
// Print: 
// Start 
// (wait 2 sec) 
// End 

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function main() {
  console.log("Start");

  await wait(2000);

  console.log("End");
}

main();

// Output
// Start
// (after 2 sec)
// End

// Q17 
// Print: 
// 1 
// (wait) 
// 2 
// (wait) 
// 3 

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function main() {
  console.log(1);

  await wait(1000);

  console.log(2);

  await wait(1000);

  console.log(3);
}

main();

// Output
// 1
// (after 1 sec)
// 2
// (after 1 sec)
// 3

// Q18 
// Create async greeting system. 

async function greet(name) {
  return `Hello ${name}`;
}

async function main() {
  const message = await greet("Vibha");
  console.log(message);
}

main();

// Output
// Hello Vibha

// Q19 
// Create async OTP verification. 

async function verifyOTP(otp) {
  const correctOTP = 1234;

  if (otp === correctOTP) {
    return "OTP Verified";
  }

  throw new Error("Invalid OTP");
}

async function main() {
  try {
    const result = await verifyOTP(1234);
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

main();

// Output
// OTP Verified
// Invalid OTP
// Invalid OTP

// Q20 
// Create async login simulation. 
// LEVEL 3 (Q21-Q30) 
// Async + Try Catch 

async function login(username, password) {
  const dbUser = "admin";
  const dbPass = "1234";

  if (username === dbUser && password === dbPass) {
    return "Login Successful";
  }

  throw new Error("Login Failed");
}

async function main() {
  try {
    const result = await login("admin", "1234");
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

main();

// Output
// Login Successful
// Wrong Credentials
// Login Failed

// Q21 
// Create async function that throws error. 
// Handle using try catch. 

async function getData() {
  throw new Error("Server Error");
}

async function main() {
  try {
    const data = await getData();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}

main();

// Output
// Server Error
                                                                             
// Q22 
// Create async login validation. 
// Invalid login should throw error. 

async function login(username, password) {
  if (username === "admin" && password === "1234") {
    return "Login Successful";
  }

  throw new Error("Invalid Credentials");
}

async function main() {
  try {
    const result = await login("admin", "1234");
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

main();

// Output
// Login Successful
// Invalid Login
// Invalid Credentials

// Q23 
// Create async bank withdrawal. 
// Insufficient balance should throw error. 

async function withdraw(balance, amount) {
  if (amount > balance) {
    throw new Error("Insufficient Balance");
  }

  return `Withdrawal Successful. Remaining Balance: ${balance - amount}`;
}

async function main() {
  try {
    const result = await withdraw(10000, 3000);
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

main();

// Output
// Withdrawal Successful. Remaining Balance: 7000
// Insufficient Balance
// Insufficient Balance

// Q24 
// Create async payment gateway simulation. 

async function processPayment(amount) {
  if (amount <= 0) {
    throw new Error("Invalid Amount");
  }

  return `Payment of ₹${amount} Successful`;
}

async function main() {
  try {
    const result = await processPayment(5000);
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

main();

// Output
// Payment of ₹5000 Successful

// Q25 
// Create async registration validator. 

async function register(username) {
  if (!username) {
    throw new Error("Username Required");
  }

  return "Registration Successful";
}

async function main() {
  try {
    const result = await register("Vibha");
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

main();

// Output
// Registration Successful

// Q26 
// Create async email validator.

async function validateEmail(email) {
  if (!email.includes("@")) {
    throw new Error("Invalid Email");
  }

  return "Valid Email";
}

async function main() {
  try {
    const result = await validateEmail("test@gmail.com");
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

main();

// Output
// Valid Email
// Invalid Email
// Invalid Email

// Q27 
// Create async password validator. 

async function validatePassword(password) {
  if (password.length < 8) {
    throw new Error("Password Too Short");
  }

  return "Password Valid";
}

async function main() {
  try {
    const result = await validatePassword("mypassword123");
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

main();

// Output
// Password Valid

// Q28 
// Create async ATM simulation. 

async function atm(balance, withdrawAmount) {
  if (withdrawAmount > balance) {
    throw new Error("Insufficient Funds");
  }

  return {
    withdrawn: withdrawAmount,
    remainingBalance: balance - withdrawAmount
  };
}

async function main() {
  try {
    const result = await atm(20000, 5000);
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

main();

// Output
// {
//   withdrawn: 5000,
//   remainingBalance: 15000
// }

// Q29 
// Create async product purchase flow. 

async function purchaseProduct(stock) {
  if (stock <= 0) {
    throw new Error("Product Out Of Stock");
  }

  return "Purchase Successful";
}

async function main() {
  try {
    const result = await purchaseProduct(5);
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

main();

// Output
// Purchase Successful
// Out Of Stock
// Product Out Of Stock

// // Q30 
// Create async order cancellation flow. 
// LEVEL 4 (Q31-Q35) 
// Sequential Execution 

async function cancelOrder(orderStatus) {
  if (orderStatus === "Shipped") {
    throw new Error("Order Cannot Be Cancelled");
  }

  return "Order Cancelled Successfully";
}

async function main() {
  try {
    const result = await cancelOrder("Pending");
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

main();

// Output
// Order Cancelled Successfully

// Q31 
// Create: 
// Login 
// ↓ 
// Get User 
// ↓ 
// Get Orders 
// ↓ 
// Payment 
// Using async await. 

async function login() {
  return "Login Successful";
}

async function getUser() {
  return { id: 1, name: "Vibha" };
}

async function getOrders() {
  return ["Laptop", "Mouse"];
}

async function payment() {
  return "Payment Successful";
}

async function main() {
  const loginResult = await login();
  console.log(loginResult);

  const user = await getUser();
  console.log(user);

  const orders = await getOrders();
  console.log(orders);

  const paymentResult = await payment();
  console.log(paymentResult);
}

main();

// Output
// Login Successful
// { id: 1, name: 'Vibha' }
// [ 'Laptop', 'Mouse' ]
// Payment Successful

// Q32 
// Create movie booking flow. 

async function selectMovie() {
  return "Movie Selected";
}

async function selectSeats() {
  return "Seats Selected";
}

async function makePayment() {
  return "Payment Done";
}

async function getTicket() {
  return "Ticket Generated";
}

async function bookMovie() {
  console.log(await selectMovie());
  console.log(await selectSeats());
  console.log(await makePayment());
  console.log(await getTicket());
}

bookMovie();

// Output
// Movie Selected
// Seats Selected
// Payment Done
// Ticket Generated

// Q33 
// Create food delivery flow. 

async function orderFood() {
  return "Food Ordered";
}

async function prepareFood() {
  return "Food Prepared";
}

async function assignDeliveryBoy() {
  return "Delivery Partner Assigned";
}

async function deliverFood() {
  return "Food Delivered";
}

async function main() {
  console.log(await orderFood());
  console.log(await prepareFood());
  console.log(await assignDeliveryBoy());
  console.log(await deliverFood());
}

main();

// Output
// Food Ordered
// Food Prepared
// Delivery Partner Assigned
// Food Delivered

// Q34 
// Create train ticket booking flow. 

async function searchTrain() {
  return "Train Found";
}

async function selectSeat() {
  return "Seat Selected";
}

async function payFare() {
  return "Fare Paid";
}

async function generateTicket() {
  return "Ticket Generated";
}

async function main() {
  console.log(await searchTrain());
  console.log(await selectSeat());
  console.log(await payFare());
  console.log(await generateTicket());
}

main();

// Output
// Train Found
// Seat Selected
// Fare Paid
// Ticket Generated

// Q35 
// Create college admission flow. 
// LEVEL 5 (Q36-Q40) 
// Promise.all + Async Await 

async function submitForm() {
  return "Form Submitted";
}

async function verifyDocuments() {
  return "Documents Verified";
}

async function payFees() {
  return "Fees Paid";
}

async function admissionConfirmed() {
  return "Admission Confirmed";
}

async function main() {
  console.log(await submitForm());
  console.log(await verifyDocuments());
  console.log(await payFees());
  console.log(await admissionConfirmed());
}

main();

// Output
// Form Submitted
// Documents Verified
// Fees Paid
// Admission Confirmed

// Q36 
// Fetch: 
// Users 
// Products 
// Orders 
// Together using Promise.all. 

async function getUsers() {
  return ["Ram", "Shyam"];
}

async function getProducts() {
  return ["Laptop", "Mobile"];
}

async function getOrders() {
  return ["Order1", "Order2"];
}

async function main() {
  const [users, products, orders] =
    await Promise.all([
      getUsers(),
      getProducts(),
      getOrders()
    ]);

  console.log(users);
  console.log(products);
  console.log(orders);
}

main();

// Output
// [ 'Ram', 'Shyam' ]
// [ 'Laptop', 'Mobile' ]
// [ 'Order1', 'Order2' ]

// Q37 
// Create 5 APIs with delays. 
// Execute parallel. 

function api(name, delay) {
  return new Promise(resolve => {
    setTimeout(() => resolve(name), delay);
  });
}

async function main() {
  const result = await Promise.all([
    api("API1", 1000),
    api("API2", 2000),
    api("API3", 1500),
    api("API4", 3000),
    api("API5", 2500)
  ]);

  console.log(result);
}

main();

// Output
// [ 'API1', 'API2', 'API3', 'API4', 'API5' ]

// Q38 
// Build dashboard loader. 
// Load: 
// User 
// Orders 
// Products 
// Notifications 
// Together. 

async function getUser() {
  return "User Data";
}

async function getOrders() {
  return "Orders Data";
}

async function getProducts() {
  return "Products Data";
}

async function getNotifications() {
  return "Notifications Data";
}

async function loadDashboard() {
  const data = await Promise.all([
    getUser(),
    getOrders(),
    getProducts(),
    getNotifications()
  ]);

  console.log(data);
}

loadDashboard();

// Output
// [
//   'User Data',
//   'Orders Data',
//   'Products Data',
//   'Notifications Data'
// ]

// Q39 
// Create image gallery loader using Promise.all.

function loadImage(image) {
  return Promise.resolve(`${image} Loaded`);
}

async function main() {
  const images = await Promise.all([
    loadImage("img1.jpg"),
    loadImage("img2.jpg"),
    loadImage("img3.jpg")
  ]);

  console.log(images);
}

main();

// Output
// [
//   'img1.jpg Loaded',
//   'img2.jpg Loaded',
//   'img3.jpg Loaded'
// ]

// Q40 
// Create multiple file downloader using Promise.all. 
// LEVEL 6 (Q41-Q44) 
// Promise.allSettled() 

function downloadFile(file) {
  return Promise.resolve(`${file} Downloaded`);
}

async function main() {
  const files = await Promise.all([
    downloadFile("file1.pdf"),
    downloadFile("file2.pdf"),
    downloadFile("file3.pdf")
  ]);

  console.log(files);
}

main();

// Output
// [
//   'file1.pdf Downloaded',
//   'file2.pdf Downloaded',
//   'file3.pdf Downloaded'
// ]

// Q41 
// Create: 
// 3 APIs Success 
// 2 APIs Fail 
// Show all results. 

function apiSuccess(name) {
  return Promise.resolve(`${name} Success`);
}

function apiFail(name) {
  return Promise.reject(`${name} Failed`);
}

async function main() {
  const results = await Promise.allSettled([
    apiSuccess("API1"),
    apiSuccess("API2"),
    apiSuccess("API3"),
    apiFail("API4"),
    apiFail("API5")
  ]);

  console.log(results);
}

main();

// Output
// [
//   { status: 'fulfilled', value: 'API1 Success' },
//   { status: 'fulfilled', value: 'API2 Success' },
//   { status: 'fulfilled', value: 'API3 Success' },
//   { status: 'rejected', reason: 'API4 Failed' },
//   { status: 'rejected', reason: 'API5 Failed' }
// ]

// Q42 
// Build admin dashboard using allSettled. 

async function getUsers() {
  return "Users Loaded";
}

async function getOrders() {
  return "Orders Loaded";
}

async function getProducts() {
  throw "Products API Failed";
}

async function getReports() {
  return "Reports Loaded";
}

async function main() {
  const result = await Promise.allSettled([
    getUsers(),
    getOrders(),
    getProducts(),
    getReports()
  ]);

  console.log(result);
}

main();

// Output
// [
//   { status: 'fulfilled', value: 'Users Loaded' },
//   { status: 'fulfilled', value: 'Orders Loaded' },
//   { status: 'rejected', reason: 'Products API Failed' },
//   { status: 'fulfilled', value: 'Reports Loaded' }
// ]

// // Q43 
// Build batch file uploader. 
// Some uploads fail. 

function uploadFile(file) {
  if (file === "file2.pdf") {
    return Promise.reject(`${file} Upload Failed`);
  }

  return Promise.resolve(`${file} Uploaded`);
}

async function main() {
  const result = await Promise.allSettled([
    uploadFile("file1.pdf"),
    uploadFile("file2.pdf"),
    uploadFile("file3.pdf")
  ]);

  console.log(result);
}

main();

// Output
// [
//   { status: 'fulfilled', value: 'file1.pdf Uploaded' },
//   { status: 'rejected', reason: 'file2.pdf Upload Failed' },
//   { status: 'fulfilled', value: 'file3.pdf Uploaded' }
// ]

// Q44 
// Build student result processor. 
// Some students fail. 
// LEVEL 7 (Q45-Q47) 
// Promise.race() + Promise.any() 

function processStudent(name, marks) {
  if (marks < 33) {
    return Promise.reject(`${name} Failed`);
  }

  return Promise.resolve(`${name} Passed`);
}

async function main() {
  const result = await Promise.allSettled([
    processStudent("Ram", 80),
    processStudent("Shyam", 25),
    processStudent("Mohan", 70),
    processStudent("Ravi", 30)
  ]);

  console.log(result);
}

main();

// Output
// [
//   { status: 'fulfilled', value: 'Ram Passed' },
//   { status: 'rejected', reason: 'Shyam Failed' },
//   { status: 'fulfilled', value: 'Mohan Passed' },
//   { status: 'rejected', reason: 'Ravi Failed' }
// ]

// Q45 
// Create 3 servers. 
// Return fastest response using race.

function server(name, delay) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${name} Response`), delay);
  });
}

async function main() {
  const result = await Promise.race([
    server("Server1", 3000),
    server("Server2", 1000),
    server("Server3", 2000)
  ]);

  console.log(result);
}

main();

// Output
// Server2 Response

// Q46 
// Create: 
// Server1 Fail 
// Server2 Fail 
// Server3 Success 
// Return first success using any. 

const server1 = Promise.reject("Server1 Failed");
const server2 = Promise.reject("Server2 Failed");
const server3 = Promise.resolve("Server3 Success");

async function main() {
  const result = await Promise.any([
    server1,
    server2,
    server3
  ]);

  console.log(result);
}

main();

// Output
// Server3 Success

// Q47 
// Build API timeout mechanism using race. 
// LEVEL 8 (Q48) 
// Async Iteration 

function apiCall() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("API Success");
    }, 5000);
  });
}

function timeout() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Request Timeout");
    }, 2000);
  });
}

async function main() {
  try {
    const result = await Promise.race([
      apiCall(),
      timeout()
    ]);

    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

main();

// Output
// Request Timeout

// Q48 
// Create async generator. 
// Yield: 
// Ram 
// Shyam 
// Mohan 
// Consume using: 
// for await...of 
// LEVEL 9 (Q49) 
// Real Project 

async function* students() {
  yield "Ram";
  yield "Shyam";
  yield "Mohan";
}

async function main() {
  for await (const student of students()) {
    console.log(student);
  }
}

main();

// Output
// Ram
// Shyam
// Mohan

// Q49 
// Build Async Notes Manager 
// Features: 
// Add Note 
// Delete Note 
// Update Note 
// Fetch Notes 
// All methods async. 

class NotesManager {
  constructor() {
    this.notes = [];
  }

  async addNote(note) {
    this.notes.push(note);
    return "Note Added";
  }

  async deleteNote(index) {
    this.notes.splice(index, 1);
    return "Note Deleted";
  }

  async updateNote(index, text) {
    this.notes[index] = text;
    return "Note Updated";
  }

  async getNotes() {
    return this.notes;
  }
}

async function main() {
  const manager = new NotesManager();

  console.log(await manager.addNote("Learn JS"));
  console.log(await manager.addNote("Learn React"));

  console.log(await manager.getNotes());

  console.log(await manager.updateNote(0, "Learn NodeJS"));

  console.log(await manager.getNotes());

  console.log(await manager.deleteNote(1));

  console.log(await manager.getNotes());
}

main();

// Output
// Note Added
// Note Added

// [ 'Learn JS', 'Learn React' ]

// Note Updated

// [ 'Learn NodeJS', 'Learn React' ]

// Note Deleted

// [ 'Learn NodeJS' ]

// LEVEL 10 (Q50) 
// �
// �
//  FINAL BOSS 
// Build Complete E-Commerce Async Flow 
// Flow: 
// Login 
// ↓ 
// Get User 
// ↓ 
// Get Products 
// ↓ 
// Get Cart 
// ↓ 
// Apply Coupon 
// ↓ 
// Calculate Total 
// ↓ 
// Payment 
// ↓ 
// Generate Invoice 
// ↓ 
// Send Email 
// ↓ 
// Track Order 
// ↓ 
// Delivery 
// Requirements:

async function login() {
  return "Login Successful";
}

async function getUser() {
  return { id: 1, name: "Vibha" };
}

async function getProducts() {
  return ["Laptop", "Mouse", "Keyboard"];
}

async function getCart() {
  return ["Laptop", "Mouse"];
}

async function applyCoupon() {
  return "Coupon Applied";
}

async function calculateTotal() {
  return 45000;
}

async function payment() {
  return "Payment Successful";
}

async function generateInvoice() {
  return "Invoice Generated";
}

async function sendEmail() {
  return "Email Sent";
}

async function trackOrder() {
  return "Order Tracking Started";
}

async function delivery() {
  return "Order Delivered";
}

async function main() {
  console.log(await login());

  console.log(await getUser());

  console.log(await getProducts());

  console.log(await getCart());

  console.log(await applyCoupon());

  console.log("Total:", await calculateTotal());

  console.log(await payment());

  console.log(await generateInvoice());

  console.log(await sendEmail());

  console.log(await trackOrder());

  console.log(await delivery());
}

main();

// Output
// Login Successful

// { id: 1, name: 'Vibha' }

// [ 'Laptop', 'Mouse', 'Keyboard' ]

// [ 'Laptop', 'Mouse' ]

// Coupon Applied

// Total: 45000

// Payment Successful

// Invoice Generated

// Email Sent

// Order Tracking Started

// Order Delivered
