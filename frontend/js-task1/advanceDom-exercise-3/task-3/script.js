var mainDiv = document.querySelector("main");
mainDiv.style.display = "flex";
mainDiv.style.flexDirection = "column";
mainDiv.style.justifyContent = "center";
mainDiv.style.alignItems = "center";
mainDiv.style.gap = "40px";

var div = document.querySelector("#box");
div.style.height = "200px";
div.style.width = "200px";
div.style.backgroundColor = "lightblue";
div.style.borderRadius = "15px";
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";

var txt = document.querySelector("h1");
var button = document.querySelector("button");

let angle = 0;
let count = 0;

button.addEventListener("dblclick", function () {
    angle += 360;
    div.style.transform = `rotate(${angle}deg)`;
    div.style.transition = "transform 2s";

    count++;
    txt.innerText = count;
});
