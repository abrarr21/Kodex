var textarea = document.querySelector("#message");
var resultDiv = document.createElement("div");
var charCount = 0;
resultDiv.innerText = charCount;
resultDiv.style.fontSize = "28px";

textarea.addEventListener("input", function (elem) {
    console.log(elem.target.value.length);
    charCount = elem.target.value.length;

    resultDiv.innerText = charCount;

    if (charCount > 100) {
        resultDiv.innerText = "Text exceeds 100 word count";
        resultDiv.style.color = "red";
    }
});

document.body.appendChild(resultDiv);
