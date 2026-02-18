function createElem(tag, styles = {}, props = {}) {
    const el = document.createElement(tag);
    Object.assign(el.style, styles);
    Object.assign(el, props);

    return el;
}

const mainDiv = createElem("div", {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
});

const inputField = createElem("input", {
    width: "150px",
    height: "150px",
    fontSize: "50px",
    textAlign: "center",
});
inputField.setAttribute("placeholder", "Enter");

const enterBtn = createElem(
    "button",
    {
        width: "150px",
        height: "60px",
        borderRadius: "15px",
        fontSize: "20px",
    },
    { innerText: "Gamble" },
);

const result = createElem("div", {
    fontSize: "60px",
});
result.innerText = "Result: ";

enterBtn.addEventListener("click", function () {
    let value = Number(inputField.value);
    console.log(value);

    if (value <= 0 || value > 50 || isNaN(value)) {
        result.innerText = "Enter a valid number 1 to 50";
        inputField.value = "";
        inputField.focus();
    } else {
        let lotteryNumber = Math.ceil(Math.random() * 50);
        console.log(lotteryNumber);

        if (value === lotteryNumber) {
            result.fontSize = "100px";
            result.innerText = "You Won!!!!!";
        } else {
            // return (result.innerText = "Try Again!!!!");
            result.style.color = `rgb(${Math.ceil(Math.random() * 256)},${Math.ceil(Math.random() * 256)},${Math.ceil(Math.random() * 256)} )`;
            result.innerText = `Try Again!!!! The Lottery Number was ${lotteryNumber}`;
            inputField.value = "";
            inputField.focus();
        }
    }
});

// Appending
document.body.appendChild(mainDiv);
mainDiv.appendChild(inputField);
mainDiv.appendChild(enterBtn);
mainDiv.appendChild(result);
