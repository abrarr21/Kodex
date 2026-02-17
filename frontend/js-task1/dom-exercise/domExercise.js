// Task: 1
// var para = document.querySelector("p");
// var btn = document.querySelector("button");
//
// var flag = false;
//
// btn.addEventListener("click", function () {
//     if (!flag) {
//         para.innerHTML = "Welcome";
//         flag = true;
//     } else {
//         para.innerHTML = "Hello";
//         flag = false;
//     }
// });

// Task: 2
// var box = document.querySelector("#box");
// var boxBtn = document.querySelector("#boxBtn");
// var count = 0;
//
// boxBtn.addEventListener("click", function () {
//     if (count === 0) {
//         box.style.backgroundColor = "red";
//         count = 1;
//     } else if (count === 1) {
//         box.style.backgroundColor = "green";
//         count = 2;
//     } else if (count === 2) {
//         box.style.backgroundColor = "blue";
//         count = 0;
//     }
// });

// Task: 3
// var box3 = document.querySelector("#box3");
// var btn3 = document.querySelector("#btn3");
// var toggle = false;
//
// btn3.addEventListener("click", function () {
//     if (toggle == false) {
//         box3.style.visibility = "hidden";
//         toggle = true;
//     } else {
//         box3.style.visibility = "visible";
//         toggle = false;
//     }
// });
//
// Task: 4
// var box4 = document.querySelector("#box4");
// var leftBtn = document.querySelector("#left");
// var rightBtn = document.querySelector("#right");
//
// leftBtn.addEventListener("click", function () {
//     box4.style.animation = "rotateLeft 0.5s ease";
// });
// rightBtn.addEventListener("click", function () {
//     box4.style.animation = "rotateRight 0.5s ease";
// });
//
// Task: 5
// var h1 = document.querySelector("h1");
// var increaseBtn = document.querySelector("#inc");
// var decreaseBtn = document.querySelector("#dec");
// var count = 0;
//
// increaseBtn.addEventListener("click", function () {
//     count += 1;
//     h1.innerText = count;
// });
//
// decreaseBtn.addEventListener("click", function () {
//     if (count > 0) {
//         count -= 1;
//         h1.innerText = count;
//     }
// });
//
// Task: 6
// var changeMod = document.querySelector("#change");
// var body = document.body;
// var flag = false;
//
// changeMod.addEventListener("click", function () {
//     if (!flag) {
//         body.style.backgroundColor = "black";
//         flag = true;
//     } else {
//         body.style.backgroundColor = "white";
//         flag = false;
//     }
// });
//
// Task: 7
// var inputField = document.querySelector("input");
// var para = document.querySelector("p");
//
// inputField.addEventListener("input", function (elem) {
//     console.log(elem.target.value);
//     para.innerText = elem.target.value;
// });
//
// Task: 8
// var box = document.getElementById("box");
// box.addEventListener("mouseenter", function () {
//     box.style.backgroundColor = "magenta";
// });
//
// box.addEventListener("mouseleave", function () {
//     box.style.backgroundColor = "white";
// });
//
// Task: 9
// var btn = document.querySelector("button");
// var para = document.querySelector("p");
//
// btn.addEventListener("click", function () {
//     para.innerText = "Button Click!!!!";
// });
//
// Task: 10
var redLight = document.getElementById("redLight");
var yellowLight = document.getElementById("yellowLight");
var greenLight = document.getElementById("greenLight");

var stop = document.getElementById("stop");
var ready = document.getElementById("ready");
var go = document.getElementById("go");

function reset() {
    redLight.style.backgroundColor = "grey";
    greenLight.style.backgroundColor = "grey";
    yellowLight.style.backgroundColor = "grey";
}

stop.addEventListener("click", function () {
    reset();
    redLight.style.backgroundColor = "red";
});
ready.addEventListener("click", function () {
    reset();
    yellowLight.style.backgroundColor = "yellow";
});
go.addEventListener("click", function () {
    reset();
    greenLight.style.backgroundColor = "green";
});
