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

    {
        name: "55-inch Smart TV",
        price: 45999,
        quantity: 10,
        category: "Electronics",
        supplier: "Sony",
        description: "4K Ultra HD Smart LED TV with Android OS",
        inStock: true,
        srcImage:
            "https://rukminim2.flixcart.com/image/480/640/kq6yefk0/television/e/p/w/l50m5-5ain-mi-original-imag4969ybwxqwza.jpeg?q=90",
    },

    {
        name: "Tablet 10.1",
        price: 18999,
        quantity: 20,
        category: "Electronics",
        supplier: "Lenovo",
        description: "10.1-inch tablet with 4GB RAM and 64GB storage",
        inStock: true,
        srcImage:
            "https://images.macrumors.com/t/lLsAD4CY7gCnTqz5HhPeZe6LF0g=/1600x/article-new/2013/09/ipad-mini-7-colors.jpg",
    },

    {
        name: "Wireless Earbuds",
        price: 1999,
        quantity: 50,
        category: "Electronics",
        supplier: "boAt",
        description: "True wireless earbuds with charging case",
        inStock: true,
        srcImage:
            "https://hips.hearstapps.com/hmg-prod/images/wireless-earbuds-001-6792869accae0.jpg?crop=0.583xw:0.776xh;0.194xw,0.179xh&resize=1200:*",
    },

    {
        name: "Soundbar System",
        price: 7999,
        quantity: 12,
        category: "Electronics",
        supplier: "Philips",
        description: "2.1 channel soundbar with subwoofer",
        inStock: true,
        srcImage:
            "https://impexstore.com/cdn/shop/files/impex-soundbar-speaker-MUSIKBARM1012-img-1.jpg?v=1707472858&width=1780",
    },

    {
        name: "Gaming Monitor 24-inch",
        price: 13999,
        quantity: 14,
        category: "Electronics",
        supplier: "Acer",
        description: "24-inch Full HD gaming monitor with 144Hz refresh rate",
        inStock: true,
        srcImage:
            "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/aw-series/aw3225qf/pdp/monitor-alienware-aw3225qf-hero.psd?fmt=jpg&wid=756&hei=525",
    },

    {
        name: "Smart Watch Series 5",
        price: 8999,
        quantity: 22,
        category: "Electronics",
        supplier: "Noise",
        description: "Fitness smartwatch with heart rate monitor",
        inStock: true,
        srcImage:
            "https://www.apple.com/assets-www/en_IN/watch1/og/watch_og_c64ec6c67.png",
    },

    {
        name: "Home Theater System",
        price: 15999,
        quantity: 6,
        category: "Electronics",
        supplier: "LG",
        description: "5.1 channel home theater speaker system",
        inStock: true,
        srcImage:
            "https://truvison.com/wp-content/uploads/2020/08/TV-5055BT.jpg",
    },

    {
        name: "DSLR Camera 24MP",
        price: 54999,
        quantity: 5,
        category: "Electronics",
        supplier: "Canon",
        description: "24MP DSLR camera with 18-55mm lens kit",
        inStock: true,
        srcImage:
            "https://tiimg.tistatic.com/fp/2/006/482/nikon-d850-dslr-camera-072.jpg",
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
                        <button class="remove-btn" data-index="${i}"><i class="ri-delete-bin-5-line"></i></button>
                        <button class="add-btn" data-index="${i}"><i class="ri-shopping-bag-line"></i></button>
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

    // console.log(newProduct);
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
    // if (el.target.classList.contains("remove-btn")) {
    //     const index = Number(el.target.dataset.index);
    //     products.splice(index, 1);
    //     generateProducts();
    // }
    const btn = el.target.closest(".remove-btn");
    if (btn) {
        const index = Number(btn.dataset.index);
        products.splice(index, 1);
        generateProducts();
    }

    if (el.target.classList.contains("edit-btn")) {
        const index = Number(el.target.dataset.index);
        // console.log(index);
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
        // console.log(elDetails);
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

    const cartIcon = el.target.closest(".add-btn");
    if (cartIcon) {
        const idx = Number(cartIcon.dataset.index);
        if (isNaN(idx)) {
            return;
        }

        let clickedCard = products.find(function (_, i) {
            return i == idx;
        });

        // check if product already exist in cartsData
        const newProd = clickedCard;
        const exist = cartsData.some(
            (p) => JSON.stringify(p) === JSON.stringify(newProd),
        );
        console.log(exist);

        if (!exist) {
            cartsData.push(clickedCard);
            renderCartUI();
            console.log(cartsData);
        } else {
            alert("Already in the cart");
        }

        console.log(clickedCard);
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

let cartBtn = document.querySelector(".cart-btn");
let cartScreen = document.querySelector(".cart-screen");
let cartOpen = false;
let cartsData = [];

// console.log(cartBtn);

cartBtn.addEventListener("click", function () {
    if (!cartOpen) {
        cartScreen.style.display = "flex";
        cartBtn.innerHTML = `<i class="ri-home-2-line"></i>`;
        cartOpen = true;
    } else {
        cartScreen.style.display = "none";
        cartBtn.innerHTML = `<i class="ri-shopping-cart-2-line"></i>`;
        cartOpen = false;
    }
});

function renderCartUI() {
    let cartsUI = "";
    cartsData.forEach(function (e, i) {
        cartsUI += `
                <div class="prod-cards">
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
                        <button onClick="deleteFromCart(${i})" class="remove-btn" data-index="${i}"><i class="ri-delete-bin-5-line"></i></button>
                    </div>
                </div>

`;
    });
    cartScreen.innerHTML = cartsUI;
}

function deleteFromCart(id) {
    let result = cartsData.filter(function (e, idx) {
        return idx !== id;
    });

    cartsData = result;
    renderCartUI();
    // console.log(result);
}
