var button = document.querySelector("button");
let resultDiv = document.createElement("div");
resultDiv.innerText = "Result";
resultDiv.style.fontSize = "25px";

button.addEventListener("click", function () {
    let gambleNumber = Math.ceil(Math.random() * 10);
    console.log(gambleNumber);

    if (gambleNumber > 7) {
        resultDiv.innerText = "You Win!";
    } else {
        resultDiv.innerText = "Try Again!!!!";
    }
});
document.querySelector("body").appendChild(resultDiv);
