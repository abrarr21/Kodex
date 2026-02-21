var products = [
    "Laptop",
    "Computer",
    "Bag",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Camera",
];
var productList = document.getElementById("productList");

function displayProducts(arr) {
    productList.innerHTML = "";
    arr.forEach((element) => {
        const list = document.createElement("li");
        list.innerText = element;
        productList.appendChild(list);
    });
}

displayProducts(products);

document.getElementById("productInput").addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = products.filter((p) => p.toLowerCase().startsWith(value));
    displayProducts(filtered);
});
