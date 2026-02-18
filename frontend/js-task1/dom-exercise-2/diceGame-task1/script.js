// Task: 1 (Dice game)
var mainDiv = document.createElement("div");
var diceContainer = document.createElement("div");
var button = document.createElement("div");
var diceOne = document.createElement("div");
var diceTwo = document.createElement("div");
var h1 = document.createElement("h1");
var h2 = document.createElement("h1");
var resultDiv = document.createElement("div");

mainDiv.style.width = "100%";
mainDiv.style.height = "100%";
mainDiv.style.display = "flex";
mainDiv.style.flexDirection = "column";
mainDiv.style.justifyContent = "center";
mainDiv.style.gap = "50px";
document.body.appendChild(mainDiv);

// Button
button.innerText = "Roll the dice";
button.style.padding = "20px 80px";
button.style.borderRadius = "10px";
button.style.margin = "0px auto";
button.style.border = "1px solid black";
button.style.cursor = "pointer";
button.style.backgroundColor = "teal";
button.style.color = "white";
button.style.fontSize = "20px";
mainDiv.appendChild(button);

button.addEventListener("mousedown", function () {
    button.style.transform = "scale(0.98)";
});

button.addEventListener("mouseup", function () {
    button.style.transform = "scale(1)";
});
button.addEventListener("click", function () {
    var rndmNum = Math.ceil(Math.random() * 6);
    var rndmNum2 = Math.ceil(Math.random() * 6);
    h1.textContent = rndmNum;
    h2.textContent = rndmNum2;
});

diceContainer.style.width = "100%";
diceContainer.style.display = "flex";
diceContainer.style.gap = "100px";
diceContainer.style.justifyContent = "center";
diceContainer.style.alignItems = "center";
mainDiv.appendChild(diceContainer);

diceOne.style.width = "300px";
diceOne.style.height = "300px";
diceOne.style.borderRadius = "50px";
diceOne.style.backgroundColor = "crimson";
diceOne.style.position = "relative";

h1.innerText = "Dice 1";
h1.style.color = "white";
h1.style.fontSize = "50px";
h1.style.position = "absolute";
h1.style.top = "50%";
h1.style.left = "50%";
h1.style.transform = "translate(-50%, -50%)";
diceContainer.appendChild(diceOne);
diceOne.appendChild(h1);

diceTwo.style.width = "300px";
diceTwo.style.height = "300px";
diceTwo.style.borderRadius = "50px";
diceTwo.style.backgroundColor = "purple";
diceTwo.style.position = "relative";

h2.innerText = "Dice 2";
h2.style.color = "white";
h2.style.fontSize = "50px";
h2.style.position = "absolute";
h2.style.top = "50%";
h2.style.left = "50%";
h2.style.transform = "translate(-50%, -50%)";

diceContainer.appendChild(diceTwo);
diceTwo.appendChild(h2);

mainDiv.appendChild(resultDiv);
resultDiv.innerText = "RESULT: ";
resultDiv.style.textAlign = "center";
resultDiv.style.fontSize = "50px";

// var numberOne = h1.innerText;
// var numberTwo = h2.innerText

button.addEventListener("click", function () {
    var numberOne = h1.innerText;
    var numberTwo = h2.innerText;

    if (numberOne > numberTwo) {
        resultDiv.innerText = "Dice 1 is the winner!!!";
        resultDiv.style.color = "crimson";
        resultDiv.style.fontWeight = "700";
    } else {
        resultDiv.innerText = "Dice 2 is the winner!!!";
        resultDiv.style.color = "purple";
        resultDiv.style.fontWeight = "700";
    }
});
