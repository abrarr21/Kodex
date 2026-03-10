// Fetch API
// 1 and 2
const users = fetch("https://jsonplaceholder.typicode.com/users");
// users.then((v) => v.json()).then((val) => console.log(val));

// 3.
// users
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then((data) => console.log(data));

// 4.
// users
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//         console.log("DATA LoADED");
//     });

// 5.
// users
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data.length);
//     });

// 6.
// fetch("https://jsonplaceholder.typicode.com/userss")
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// -------------- Promise -------------------------------
// 7.
// const p1 = new Promise((res) => {
//     return res("Hello");
// });
// p1.then((res) => console.log(res));

// 8.
// new Promise((rej) => rej("Something went wrong")).then((res) =>
//     console.log(res),
// );

// 9.
// new Promise((resolve) => resolve("Start"))
//     .then((msg) => {
//         console.log(msg);
//         return "Next Step";
//     })
//     .then((msg) => console.log(msg));

// 10.
// new Promise((resolve) => {
//     setTimeout(() => resolve("After 2 seconds"), 2000);
// }).then((msg) => console.log(msg));

// 11.
// new Promise((resolve) => resolve("STEP 1"))
//     .then((msg) => {
//         console.log(msg);
//         return "STEP 2";
//     })
//     .then((msg) => console.log(msg));

// ----------------------- Async/Await ------------------------------
// 12, 13, 14
const getData = fetch("https://jsonplaceholder.typicode.com/users");

// const res = async () => {
//     let ans = await getData;
//     let finalAns = await ans.json();
//     console.log(finalAns);
// };
// res();

// 15.
async function wait() {
    await new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
        console.log("resolved after 1 sec"),
    );
}
wait();

// 16.
const result = async () => {
    const ans = await getData;
    const finalAns = await ans.json();
    console.log(finalAns);
    console.log("Finished Fetching");
};
result();

// --------------------- Error Handling -------------------------------
// 17.
try {
    const data = JSON.parse("Invalid json");
} catch (error) {
    console.log("Error parsing json");
}

// 18.
function checkInput(input) {
    if (input > 4) {
        throw new Error("Invalid Input");
    }
    return input;
}
// checkInput(7);

// 19.
try {
    throw new Error("Something went wrong");
} catch (error) {
    console.log("Error Occured");
}

// 20.
try {
    throw new Error("Hello the problem");
} catch (error) {
    console.log("Error");
} finally {
    console.log("This line works no matter what");
}

//  21.
async function getData2() {
    try {
        let ans = await getData3;
        let finalAns = await ans.json();
        console.log(finalAns);
    } catch (error) {
        console.log("something went wrong while fetching");
    }
}
getData2();

// ------------------------- ES module -----------------------------
// 22 and 23.
import { name } from "./util.js";
console.log(name);

// 24 and 25
import sum from "./util.js";
console.log(sum(2, 5));
