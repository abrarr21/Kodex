// 1.
// var name1 = prompt("enter your name");
// var hobby = prompt("enter your hobby");
//
// console.log(`Your name is ${name1} and your hobby is ${hobby}`);

// 2.
console.log(45 * 2 - 10); //80

//3.
const ctyr = new Date();
const crntyear = ctyr.getFullYear();
console.log(crntyear);

// 4.
const firstname = "Abrar";
const lastname = "Ansari";
console.log(`FullName: ${firstname} ${lastname}`);

// 5.
var randomvar = "Hello";
console.log(randomvar);

randomvar = "How do you do?";
console.log(randomvar);

// 6.
console.error("Console has been compromised");

// 7.
const num = 7;
console.log(`Square of ${num} is ${num * num}`);

// 8.
const age = 23;
if (age > 18) {
    console.log("Adult");
} else {
    console.log("Kiddo");
}

// 9.
console.log(34 / 0);

// Variable & Data types
// 11.
let name2 = "ace";
console.log(name2);

// 12.
const pi = 3.14;
console.log(pi);

// 13.
let profession = "painter";
console.log(profession);
profession = "Dictator";
console.log(profession);

// 14.
console.log(typeof null);

// 15.
let nm = "25";
console.log(typeof nm);

// 16.
let isAge = true;
console.log(typeof isAge);

// 17.
const str = "This is a string";
const number = 34;
const bool = false;
console.log(`${str}, ${number}, ${bool}`);

// 18.
let noValue;
console.log(typeof noValue);

// 19.
const undfn = undefined;
console.log(typeof undfn);

// 20.
const arr1 = [2, "a", 8, true];
console.log(arr1);
// arr1 = [13, "b", 9, false];
// console.log(arr1)  -> typeError
arr1[0] = 3;
console.log(arr1);

// LOOPs
// 21.
for (i = 0; i <= 50; i++) {
    console.log(i);
}

// 22.
let n = 1;
let sum = 0;
while (n <= 10) {
    sum += n;
    n++;
}
console.log("The sum of 1-10 is:", sum);

// 23.
const js = "javascript";
for (const value of js) {
    console.log(value);
}

// 24.
for (m = 1; m <= 20; m++) {
    if (m % 2 == 0) continue;

    console.log(m);
}

// 25.
let p = 5;
do {
    console.log(p);
    p--;
} while (p >= 1);

// 26.
let fact = 1;
for (x = 1; x <= 5; x++) {
    fact = fact * x;
}
console.log("The factorial of 5 is: ", fact);

// 27.
let val = 1;
while (val <= 100) {
    if (val % 5 == 0) {
        console.log(val);
    }
    val++;
}

// 30.
const obj = { name: "Abrar", age: 234 };
for (const key in obj) {
    console.log(key);
}

// If-Else
// 31.
let rn = -3;
if (rn > 0) {
    console.log("positive number");
} else {
    console.log("Negative number");
}

// 32.
let checkAge = 18;
if (checkAge >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// 33.
let isEvenOdd = 45;
if (isEvenOdd % 2 == 0) {
    console.log("Its an even number");
} else {
    console.log("its a odd number");
}

// 34.
let a1 = 45;
let b2 = 34;
if (a1 > b2) {
    console.log(a1);
} else {
    console.log(b2);
}

// 35.
let gradingMarks = 99;
if (gradingMarks >= 90) {
    console.log("Exellent");
} else if (gradingMarks >= 70) {
    cosnole.log("Good");
} else {
    console.log("Need improvement");
}

// 36.
let year = 2026;
if (year % 4 == 0) {
    console.log("leap year", year);
} else {
    console.log("Not a leap year", year);
}

// 37.
let characters = ["a", "c", "i", "e", "f", "g", "o"];
for (const val of characters) {
    if (val == "a" || val == "i" || val == "e" || val == "o" || val == "u") {
        console.log("this is a vowel", val);
    } else {
        console.log("this is consonant", val);
    }
}

// 38.
let num1 = 2;
let num2 = 21;
let num3 = 34;
if (num1 > num2 && num1 > num3) {
    console.log("num1 is bigger");
} else if (num2 > num1 && num2 > num3) {
    console.log("num2 is largest");
} else {
    console.log("num3 is largest");
}

// 39.
let isPassword = "admin123";
if (isPassword != "admin123") {
    console.log("Incorrect");
} else {
    console.log("Correct");
}

// 41.
let sumOfnum = 0;
for (z = 1; z <= 100; z++) {
    sumOfnum += z;
}
console.log("The sum of 1-100 is: ", sumOfnum);

// 42.
for (table = 1; table <= 100; table++) {
    if (table % 5 == 0) {
        console.log(table);
    }
}

// 43.
for (even = 1; even <= 50; even++) {
    if (even % 2 == 0) {
        console.log("Even numbers: ", even);
    }
}

// 44.
for (op = 10; op >= 1; op--) {
    console.log(op);
}

// 45.
let nxm = 1;
let sumOfnxm = 0;
while (nxm <= 20) {
    if (nxm % 2 == 0) {
        sumOfnxm += nxm;
    }
    nxm++;
}
console.log("The sum of even numbers from 1 to 20 is: ", sumOfnxm);

// 46.
let sqrnm = 1;
while (sqrnm <= 10) {
    console.log(`Square of ${sqrnm} is ${sqrnm * sqrnm}`);
    sqrnm++;
}

// 47.
let char = "javascript";
let count = 0;
for (const value of char) {
    count++;
}
console.log("The count of character is: ", count);

// 48.
const arr2 = [3, 7, 2, 9, 5];
let largest = arr2[0];
for (let i = 0; i < arr2.length; i++) {
    for (let j = 1; j < arr2.length; j++) {
        if (arr2[j] > largest) {
            largest = arr2[j];
        }
    }
}
console.log("The largest number in array is: ", largest);

// 50.
const arr3 = [10, 20, 30, 40];
let sumOfArr = 0;
for (let q = 0; q < arr3.length; q++) {
    sumOfArr += arr3[q];
}
console.log("the sum of array is: ", sumOfArr);
