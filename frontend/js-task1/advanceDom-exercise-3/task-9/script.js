var button = document.querySelector("button");
var cardContainer = document.querySelector("#cardContainer");
var form = document.querySelector("#form");
var namee = document.querySelector("#name");
var image = document.querySelector("#image");

var CardGenerated = false;

button.addEventListener("click", function () {
    let enteredName = namee.value;
    let enteredImage = image.value;
    if (enteredName == "" || enteredImage == "") {
        return;
    }

    if (CardGenerated === false) {
        console.log(enteredName);
        console.log(enteredImage);

        form.style.visibility = "hidden";
        cardContainer.style.backgroundImage = `url(${enteredImage})`;
        cardContainer.style.backgroundPosition = "center";
        cardContainer.style.backgroundSize = "cover";
        cardContainer.innerText = "Goku";
        cardContainer.style.fontSize = "60px";
        cardContainer.style.color = "cyan";

        button.innerText = "Delete Card";
        CardGenerated = true;
    } else {
        enteredImage = "";
        enteredName = "";
        cardContainer.style.backgroundImage = "";
        cardContainer.innerText = "";
        cardContainer.style.backgroundColor = "maroon";
        form.style.visibility = "visible";

        button.innerText = "Generate Card";
        CardGenerated = false;
    }
});
