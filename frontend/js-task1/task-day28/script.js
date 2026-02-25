import { arr } from "./character.js";

var navbar = document.querySelector("#navv");
var cards = document.querySelectorAll(".cards");

navbar.childNodes[3].childNodes[1].addEventListener("click", function () {
    cards.forEach(function (elem, index) {
        if (arr[index].isConnected) {
            elem.style.display = "flex";
        } else {
            elem.style.display = "none";
        }
    });
});
navbar.childNodes[3].childNodes[3].addEventListener("click", function () {
    cards.forEach(function (elem, index) {
        if (!arr[index].isConnected) {
            elem.style.display = "flex";
        } else {
            elem.style.display = "none";
        }
    });
});
navbar.childNodes[3].childNodes[5].addEventListener("click", function () {
    cards.forEach(function (elem) {
        elem.style.display = "flex";
    });
});

cards.forEach(function (elem, index) {
    // console.log(elem.childNodes[3].childNodes[5]);
    // elem.childNodes[3].childNodes[5].addEventListener("click", function () {
    //     console.log("Button Clicked");
    // });

    elem.addEventListener("mouseover", function () {
        elem.style.transform = "scale(1.1)";
        elem.style.transition = "transform 0.3s"; // smooth animation
    });
    elem.addEventListener("mouseleave", function () {
        elem.style.transform = "scale(1)";
        elem.style.transition = "transform 0.3s";
    });

    const data = arr[index];

    const imgDiv = elem.childNodes[1];
    const txtDiv = elem.childNodes[3];

    // get elements
    const img = imgDiv.querySelector("img");
    const title = txtDiv.childNodes[1];
    const description = txtDiv.childNodes[3];
    const btn = txtDiv.childNodes[5];

    //set elements
    img.src = data.src;
    title.innerHTML = data.name;
    description.innerHTML = data.desc;
    btn.addEventListener("click", function () {
        data.isConnected = !data.isConnected;

        btn.textContent = data.isConnected ? "Connected" : "Add Connection";
    });
});

window.addEventListener("wheel", function (details) {
    if (details.deltaY > 0) {
        navbar.style.transform = `translateY(-100%)`;
        navbar.classList.remove("active");
    } else {
        navbar.style.transform = `translateY(0%)`;
        navbar.classList.add("active");
    }
});
