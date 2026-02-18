function createElem(tag, styles = {}, props = {}) {
    const el = document.createElement(tag);
    Object.assign(el.style, styles);
    Object.assign(el, props);
    return el;
}

const mainDiv = createElem("div", {
    width: "100%",
    height: "100%",
    padding: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    gap: "30px",
});

let generateBtn = createElem(
    "button",
    {
        borderRadius: "10px",
        padding: "15px 30px",
        fontSize: "25px",
        cursor: "pointer",
    },
    { innerText: "Generate Cards" },
);

let cards = createElem("div", {
    borderRadius: "15px",
});

let cardNumber = 0;
generateBtn.addEventListener("click", function () {
    cardNumber++;
    console.log("Helo");
    let randomHeight = Math.ceil(Math.random() * 550);
    let randomWidth = Math.ceil(Math.random() * 700);

    console.log(randomWidth);
    console.log(randomHeight);

    cards.style.height = `${randomHeight}px`;
    cards.style.width = `${randomWidth}px`;
    cards.style.backgroundColor = `rgb( ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)} )`;

    cards.setAttribute("data-id", cardNumber);
});
// Appending
document.body.appendChild(mainDiv);
mainDiv.appendChild(generateBtn);
mainDiv.appendChild(cards);
