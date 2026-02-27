let products = [
    {
        name: "Wireless Mouse",
        price: 799,
        quantity: 25,
        category: "Electronics",
        supplier: "LogiTech Pvt Ltd",
        description: "Ergonomic wireless mouse with USB receiver",
        inStock: true,
        srcImage:
            "https://www.portronics.com/cdn/shop/products/Toad_13_1200x1200_1_7cb991ad-02a6-4c03-8d74-3795f112dc8d.jpg?v=1647439819",
        inStock: true,
    },
    {
        name: "Running Shoes",
        price: 2499,
        quantity: 12,
        category: "Clothing",
        supplier: "Nike India",
        description: "Lightweight running shoes for daily training",
        inStock: true,
        srcImage:
            "https://cdn.thewirecutter.com/wp-content/media/2024/05/runningshoesforyou-2048px-2254.jpg?auto=webp&quality=75&width=1024",
        inStock: true,
    },
    {
        name: "Office Chair",
        price: 5999,
        quantity: 5,
        category: "Furniture",
        supplier: "UrbanSpace",
        description: "Adjustable ergonomic office chair",
        inStock: true,
        srcImage:
            "https://img.tatacliq.com/images/i19//437Wx649H/MP000000023263841_437Wx649H_202408100104441.jpeg",
        inStock: true,
    },
    {
        name: "Notebook Pack",
        price: 299,
        quantity: 0,
        category: "Stationary",
        supplier: "Classmate",
        description: "Pack of 5 ruled notebooks",
        inStock: false,
        srcImage:
            "https://images-cdn.ubuy.co.in/6941e7d5bd14e6f5e807eff8-4-pack-hardcover-spiral-notebook-8-5x11.jpg",
        inStock: false,
    },
    {
        name: "Protein Powder",
        price: 1999,
        quantity: 18,
        category: "Health",
        supplier: "MuscleBlaze",
        description: "Whey protein supplement 1kg",
        inStock: true,
        srcImage:
            "https://sezpronutrition.com/cdn/shop/files/chocolate_protein_powder.webp?v=1708174832",
        inStock: true,
    },
    {
        name: "Gaming Laptop",
        price: 2999,
        quantity: 0,
        category: "Electronics",
        supplier: "MSI",
        description: "Latest generation process with high end gpu",
        srcImage:
            "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/144117-laptops-news-msi-unveils-new-line-of-gaming-laptops-including-the-world%E2%80%99s-first-intel-core-i9-powered-laptop-image1-vlu8d01wb5.jpg",
        inStock: true,
    },
    {
        name: "IKEA Bed",
        price: 6969,
        quantity: 1,
        category: "Furniture",
        supplier: "IKEA Brazil",
        description: "Master size bed with good suspension",
        srcImage:
            "https://www.zorin.co.in/cdn/shop/files/AloeKing_Liftstyle_e19a363b-98fc-4c4f-9716-e59a1be79a29.jpg?v=1708957280",
        inStock: true,
    },
];

// Load from localStorage if Availabe, use hardcoded otherwise
const saved = localStorage.getItem("products");
if (saved) {
    products = JSON.parse(saved);
} else {
    // calculate inStock by using quantity
    products.forEach((p) => {
        p.inStock = p.quantity > 0;
    });
}

let editingIndex = -1;

var cardContainer = document.querySelector("#products");

function generateProducts() {
    // Save to localStorage on every render
    localStorage.setItem("products", JSON.stringify(products));

    var sum = "";
    products.forEach(function (e, i) {
        sum += ` <div class="prod-cards">
                    <div id="prod-img">
                        <img
                            src="${e.srcImage}"
                            alt=""
                        />
                        <span id="stock-badge">${e.inStock ? "Availabe" : "Out of Stock"}</span>
                    </div>
                    <h2>${e.name}</h2>
                    <h3>${e.description}</h3>
                    <h4 class="catgry">
                        Category:
                        <span>${e.category}</span>
                    </h4>
                    <h4 class="catgry">
                        Supplier:
                        <span>${e.supplier}</span>
                    </h4>
                    <h4>Quantity: <span>${e.quantity}</span></h4>
                    <h4>Price: <span>$${e.price}</span></h4>
                    <div class="cards-btn">
                        <button class="edit-btn" data-index="${i}">Edit</button>
                        <button class="remove-btn" data-index="${i}">Remove</button>
                    </div>
                </div>
                `;
    });
    cardContainer.innerHTML = sum;
}

generateProducts();

// moadal
const modalOverlay = document.getElementById("modalOverlay");
const openBtn = document.querySelector(".prod-btn button");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
    editingIndex = -1; // new product addition
    form.reset();
    modalOverlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    form.reset();
    editingIndex = -1;
    modalOverlay.classList.remove("active");
});

modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        form.reset();
        editingIndex = -1;
        modalOverlay.classList.remove("active");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        form.reset();
        editingIndex = -1;
        modalOverlay.classList.remove("active");
    }
});

var form = document.querySelector("#productForm");

form.addEventListener("submit", function (x) {
    x.preventDefault();
    // console.log(form.childNodes);
    var newProduct = {
        name: form.elements[0].value,
        description: form.elements[1].value,
        price: form.elements[2].value,
        quantity: form.elements[3].value,
        category: form.elements[4].value,
        supplier: form.elements[5].value,
        srcImage: form.elements[6].value,
        inStock: Number(form.elements[3].value) > 0,
    };

    if (editingIndex >= 0) {
        products[editingIndex] = newProduct; //update existing
        editingIndex = -1;
    } else {
        products.push(newProduct); //add new
    }

    console.log(newProduct);
    form.reset();
    generateProducts();
    modalOverlay.classList.remove("active");
});

var cards = document.querySelectorAll(".prod-cards");

// cards.forEach(function (e) {
//     e.addEventListener("click", function (el) {
//         console.log(el.target.id);
//         console.log(el.target.innerHTML);
//         if (el.target.id && el.target.innerHTML == "Remove") {
//             products.splice(Number(el.target.id), 1);
//         }
//         generateProducts();
//     });
// });
//
cardContainer.addEventListener("click", function (el) {
    if (el.target.classList.contains("remove-btn")) {
        const index = Number(el.target.dataset.index);
        products.splice(index, 1);
        generateProducts();
    }
    if (el.target.classList.contains("edit-btn")) {
        const index = Number(el.target.dataset.index);
        console.log(index);
        editingIndex = index;

        const elDetails = {
            name: products[index].name,
            description: products[index].description,
            price: products[index].price,
            quantity: products[index].quantity,
            category: products[index].category,
            supplier: products[index].supplier,
            srcImage: products[index].srcImage,
        };
        console.log(elDetails);
        console.log(el.target.className);

        form.elements[0].value = elDetails.name;
        form.elements[1].value = elDetails.description;
        form.elements[2].value = elDetails.price;
        form.elements[3].value = elDetails.quantity;
        form.elements[4].value = elDetails.category;
        form.elements[5].value = elDetails.supplier;
        form.elements[6].value = elDetails.srcImage;

        modalOverlay.classList.add("active");

        // closeBtn.addEventListener("click", () => {
        //     form.reset();
        //     modalOverlay.classList.remove("active");
        // });
        //
        // document.addEventListener("keydown", (e) => {
        //     if (e.key === "Escape") {
        //         form.reset();
        //         modalOverlay.classList.remove("active");
        //     }
        // });
    }
});

// sticky and scroll event
var nav = document.querySelector("nav");

window.addEventListener("wheel", function (dt) {
    if (dt.deltaY > 0) {
        nav.style.transform = `translateY(-100%)`;
    } else {
        nav.style.transform = `translateY(0%)`;
    }
});
