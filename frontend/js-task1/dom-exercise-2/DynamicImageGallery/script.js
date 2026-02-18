let pictures = [
    "https://images.unsplash.com/photo-1770135157335-fa819e9ced2b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1770872937735-277e82b6de0f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1753093329977-d950f394b215?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1753091708764-49c2728c3152?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function createElement(tag, styles = {}, props = {}) {
    const el = document.createElement(tag);
    Object.assign(el.style, styles);
    Object.assign(el, props);

    return el;
}

const mainDiv = createElement("div", {
    width: "100%",
    height: "100%",
    backgroundColor: "grey",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "50px",
    paddingTop: "70px",
});

const button = createElement(
    "button",
    {
        borderRadius: "10px",
        padding: "10px",
        fontSize: "50px",
        backgroundColor: "maroon",
        color: "white",
        cursor: "pointer",
    },
    { innerText: "Click for more" },
);
const imgCard = createElement("img", {
    height: "736px",
    width: "736px",
    object: "contain",
    visibility: "hidden",
});

button.addEventListener("click", function () {
    imgCard.style.visibility = "visible";
    imgCard.setAttribute(
        "src",
        `${pictures[Math.floor(Math.random() * pictures.length)]}`,
    );

    // imgCard.getAttribute("src")
    console.log(imgCard.getAttribute("src"));
});

document.body.appendChild(mainDiv);
mainDiv.appendChild(button);
mainDiv.appendChild(imgCard);
