var body = document.body;
var cursor = document.getElementById("cursor");

body.addEventListener("mousemove", function (details) {
    cursor.style.left = details.x + "px";
    cursor.style.top = details.y + "px";
});

function handleKey(e) {
    cursor.classList.toggle("active", e.type === "keydown");
}

body.addEventListener("keydown", handleKey);
body.addEventListener("keyup", handleKey);
