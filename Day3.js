// Q1 
// Ek student object banao jisme: 
// ● name 
// ● age 
// ● city

const Student ={
    name: "Vibha",
    age: 22,
    City: "Karnal"
}

console.log(Student);

//Q2

// Upar wale object ka name print karo. 

const Student={
    name: "Vibha",
    age: 22,
    City: "Karnal"
}
console.log(Student.name)

//Q3 
// Object me greet() method add karo jo print kare: 
// Hello I am Ram
const Student={
    name: "Vibha",
    age: 22,
    City: "Karnal",

    greet: function(){
        console.log("Hello i am Ram");
    }
}

Student.greet();

//Q4 
// Object me isAdult() method banao jo age check kare.
const Student={
    name: "Vibha",
    age: 22,
    City: "Karnal",

    isAdult: function(){
        if(this.age>18){
            console.log("Adult");

        }
        else{
            console.log("Not Adult");
        }
    }
    }
    Student.isAdult();

    //Q5
    // Object ki sabhi keys print karo. 
    
    
const Student={
    name: "Vibha",
    age: 22,
    City: "Karnal",

    isAdult: function(){
        if(this.age>18){
            console.log("Adult");

        }
        else{
            console.log("Not Adult");
        }
    }
    }
    console.log(Student);
    

    //Q6
    // Object ki sabhi values print karo. 

    const Student={
    name: "Vibha",
    age: 22,
    City: "Karnal",

    isAdult: function(){
        if(this.age>18){
            console.log("Adult");

        }
        else{
            console.log("Not Adult");
        }
    }
    }
    console.log(Student.name)
    console.log(Student.age);
    console.log(Student.City);
    Student.isAdult();

    //Q7
    // Check karo ki object me email property hai ya nahi.
    const student = {
    name: "Ram",
    age: 20,
    city: "Delhi"
};

console.log("email" in student);

//Q8
// Object me dynamically property add karo. 
// student.course = "MERN";
const student = {
    name: "Ram",
    age: 20,
    city: "Delhi"
};

student.course = "MERN";

console.log(student);

// Q9 
// Object se age property delete karo. 

const student = {
    name: "Ram",
    age: 20,
    city: "Delhi"
};

delete student.age;

console.log(student);

// Q10 
// Ek object ka clone banao.

const student = {
    name: "Ram",
    age: 20,
    city: "Delhi"
};

const clonedStudent = { ...student };

console.log(clonedStudent);

//Q11
// Ek object banao jisme showName() method ho aur this.name print kare.

const student = {
    name: "Ram",

    showName: function() {
        console.log(this.name);
    }
};

student.showName();

//Q 12
// Ek object me: 
// name = "Ram" 
// store karo aur method se uppercase print karo.

const student = {
    name: "Ram",

    showUpperCase: function() {
        console.log(this.name.toUpperCase());
    }
};

student.showUpperCase();

//q13
const account = {
    balance: 1000,

    deposit: function(amount) {
        this.balance += amount;
        console.log("Balance after deposit:", this.balance);
    },

    withdraw: function(amount) {
        this.balance -= amount;
        console.log("Balance after withdrawal:", this.balance);
    }
};

account.deposit(500);   // 1500
account.withdraw(300);  // 1200

// q14
const user = { 
name:"Ram", 
show(){ 
console.log(this.name); 
} 
}; 
user.show(); //Ram

// Q15

// Q15 
// Predict Output 
const user = { 
name:"Ram", 
show: () => { 
console.log(this.name); 
} 
}; 
user.show();// undefined

// Q16. Student Constructor Function banao
function Student(name, age) {
    this.name = name;
    this.age = age;
}

// Q17. 3 Student Objects create karo constructor se
function Student(name, age) {
    this.name = name;
    this.age = age;
}

const s1 = new Student("Ram", 20);
const s2 = new Student("Shyam", 21);
const s3 = new Student("Mohan", 22);

console.log(s1);
console.log(s2);
console.log(s3);

// Q18. Constructor Function me greet() method add karo
function Student(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function() {
        console.log(`Hello, I am ${this.name}`);
    };
}

const s1 = new Student("Ram", 20);

s1.greet();

// Q19 Predict Output
Code
function User(name) {
    this.name = name;
}

const u1 = new User("Ram");

console.log(u1.name);

// Q20
// Car Constructor Function banao
Properties:
brand
price
function Car(brand, price) {
    this.brand = brand;
    this.price = price;
}

const car1 = new Car("Toyota", 1000000);

console.log(car1);

//Q21
// Student constructor banao aur prototype me greet() method add karo
function Student(name, age) {
    this.name = name;
    this.age = age;
}

Student.prototype.greet = function() {
    console.log(`Hello, I am ${this.name}`);
};

const s1 = new Student("Ram", 20);
s1.greet();

// Q22. Check karo
function Student(name, age) {
    this.name = name;
    this.age = age;
}

const s1 = new Student("Ram", 20);

console.log(s1.__proto__ === Student.prototype);

// Q23. Prototype me isAdult() method add karo
function Student(name, age) {
    this.name = name;
    this.age = age;
}

Student.prototype.isAdult = function() {
    return this.age >= 18;
};

const s1 = new Student("Ram", 20);

console.log(s1.isAdult());

// Q24. Predict Output
// Code
function User(){}

User.prototype.sayHi = function() {
    console.log("Hi");
}

const u1 = new User();

u1.sayHi(); // Hi

// Q25. Prototype me course property add karo
function User(){}

User.prototype.course = "MERN";

const u1 = new User();

console.log(u1.course);

// Q26. Check karo
u1.hasOwnProperty("course"); //false

// Q27. Check karo
"course" in u1;// true

// Q28. Prototype Chain Draw karo
// const arr = [];

// Prototype Chain:

// arr
//  ↓
// Array.prototype
//  ↓
// Object.prototype
//  ↓
// null

// Ya code se:

console.log(arr.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null

// Q29. Animal object banao
const animal = {
    eat() {
        console.log("Eating");
    }
};

// Q30. Animal se dog object create karo using Object.create()
const animal = {
    eat() {
        console.log("Eating");
    }
};

const dog = Object.create(animal);

console.log(dog);

// Q31. Dog me bark() method add karo
const animal = {
    eat() {
        console.log("Eating");
    }
};

const dog = Object.create(animal);

dog.bark = function() {
    console.log("Barking");
};

dog.bark();

// Q32. Predict Output
Code
const animal = {
    eat() {
        console.log("Eating");
    }
};

const dog = Object.create(animal);

dog.eat();

// Q33. Student class banao
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// Q34. Class me greet() method add karo
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
}

const s1 = new Student("Ram", 20);

s1.greet();

// Q35. Class me isAdult() method add karo
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    isAdult() {
        return this.age >= 18;
    }
}

const s1 = new Student("Ram", 20);

console.log(s1.isAdult());

//Q36. 3 objects create karo class se
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const s1 = new Student("Ram", 20);
const s2 = new Student("Shyam", 21);
const s3 = new Student("Mohan", 22);

console.log(s1);
console.log(s2);
console.log(s3);

// Q37. Animal class banao
class Animal {
    eat() {
        console.log("Eating");
    }
}

// Q38. Dog class banao jo Animal ko inherit kare
class Animal {
    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {

}

//Q39. Dog class me bark() method add karo
class Animal {
    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking");
    }
}

// Q40. Create object aur methods call karo
Code
class Animal {
    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking");
    }
}

const d = new Dog();

d.eat();
d.bark();