// Q1. function that uses forEach to calculate the sum of an array.
function sumOf(arr) {
    let sum = 0;
    arr.forEach((element) => {
        sum = sum + element;
    });
    return sum;
}
let q1 = sumOf([1, 3, 4, 5, 19, 38]);
console.log(q1);

// Q2.function that uses map to return new sqaured array
function newSqr(arr) {
    let sqr = arr.map((elem) => {
        return elem * elem;
    });
    return sqr;
}
console.log(newSqr([2, 4, 7, 9]));

// Q3. function that uses filter on return only array greater than 50
function filterGreater(arr) {
    let ans = arr.filter((elem) => {
        return elem > 50;
    });
    return ans;
}
console.log(filterGreater([30, 45, 51, 50, 60, 100, 74]));

// Q4. function that checks strict (===)
function strictTypeCheck(a, b) {
    if (a === b) {
        return console.log(
            `The values ${typeof a} and ${typeof b} are Equal(type)`,
        );
    } else {
        return console.log(
            `The ${typeof a} and ${typeof b} are not Equal(type)`,
        );
    }
}
console.log(strictTypeCheck("11", "10"));

// Q5. function that demonstrates array mutability by modifying the original array using `push()`
function checkMutability(arr) {
    arr.push("new item");
    return arr;
}
const example = [1, 2, 3];
console.log("changed in new :", checkMutability(example));
console.log("changes in og", example);

// Q6.function that removes the last element immutably (without modifying original array).
function removeElem(arr) {
    const result = arr.slice(0, -1);
    return result;
}
const example2 = [1, 4, 6, 8];
const newArray = removeElem(example2);
console.log("New array: ", newArray);
console.log("og array: ", example2);

// Q7. function that sorts numbers in ascending order using a proper compare function
function sortNumber(arr) {
    let newArray = [...arr];
    for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < newArray.length - 1; j++) {
            if (newArray[j] > newArray[j + 1]) {
                let temp = newArray[j];
                newArray[j] = newArray[j + 1];
                newArray[j + 1] = temp;
            }
        }
    }
    return newArray;
}
const nums = [10, 4, 30, 25, 1, 3];
const sortedNumber = sortNumber(nums);
console.log("og array (unsorted): ", nums);
console.log("new array (sorted): ", sortedNumber);

// Q8.function that sorts strings alphabetically
function sortAlphabetsWithMutability(arr) {
    const result = arr.slice().sort();
    return result;
}
function sortAlphabetsWithNoMutability(arr) {
    return arr.sort();
}
const words = ["javascript", "c++", "ruby", "java", "python"];
const sorted = sortAlphabetsWithMutability(words);
console.log(sorted);
console.log("og remains the same: ", words);
console.log(`Change with mutability: `, sortAlphabetsWithNoMutability(words));

// Q9. function that reverses an array without using `reverse()`
function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;
        right--;
    }
    return arr;
}
console.log(reverseArray([1, 3, 5, 7, 9]));

// Q10. function that merges two arrays using `concat()` and returns the result.
function mergeArray(arr, arr2) {
    return arr.concat(arr2);
}
console.log(mergeArray([2, 4, 6], [1, 3, 8]));

// Q11. function that merges two arrays and removes duplicate values.
function mergeNoDuplicate(arr1, arr2) {
    let newArr = [];
    let merged = arr1.concat(arr2);
    for (let m of merged) {
        if (!newArr.includes(m)) {
            newArr.push(m);
        }
    }
    return newArr;
}
console.log(mergeNoDuplicate([1, 2, 3, 4], [2, 5, 6]));

// Q12. function that manually checks whether a value exists in an array(without using`includes()`)
function isExist(arr, value) {
    for (let elem of arr) {
        if (elem === value) {
            return true;
        }
    }
    return false;
}
console.log(isExist([1, 3, 5, 7, 9], 9));

// Q13. function that uses `includes()` to check if an array contains a specific value.
function isInclude(arr, value) {
    return arr.includes(value);
}
console.log(isInclude([1, 2, 3, 4], 5));

// Q14. function that filters strings starting with "A" using`startsWith()`
function xyz(arr) {
    const ans = arr.filter((elem) => elem.startsWith("A"));
    return ans;
}
console.log(xyz(["ace", "bob", "city", "Alicia"]));

// Q15. function that uses `find()` to return the first number greater than 100.
function abc(arr) {
    return arr.find((elem) => elem > 100);
}
console.log(abc([1, 2, 5, 48, 90, 101, 106]));

// Q16. Object with write a function that returns all its keys using a loop
function zzz(obj) {
    let keys = [];
    for (let key in obj) {
        keys.push(key);
    }
    return keys;
}
console.log(zzz({ name: "Abrar", skill: "html", isGood: false }));

// Q17. function that adds a new property to an object immutably
function prop(obj, key, value) {
    return { ...obj, [key]: value };
}
console.log(
    prop(
        { book: "intro to dsa", price: 111, isHard: true },
        "school",
        "sheriyans",
    ),
);

// Q18. function that updates a property in an object
function updateObj(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
}
const data = { skill: "html", isGood: false };
console.log(updateObj(data, "batch", "kodex"));

// 19. function that checks whether a specific key exists inside an object.
function keyExist(obj, key) {
    for (let k in obj) {
        if (k === key) {
            return true;
        }
    }
    return false;
}
console.log(keyExist({ skill: "css", batch: "kodex", day: 18 }, "day"));

// 20. function that converts an object into an array of key - value pairs.
function objToarr(obj) {
    let result = [];
    for (let key in obj) {
        // if (Object.hasOwn(obj, key)) {
        //     result.push([key, obj[key]]);
        // }
        result.push([key, obj[key]]);
    }
    return result;
}
console.log(objToarr({ book: "intro to js", price: 1000 }));
