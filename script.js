const products = [
    { id: 1, name: "Producto 1", price: 10.99 },
    { id: 2, name: "Producto 2", price: 14.99 },
    { id: 3, name: "Producto 3", price: 7.99 }
];

const cart = [];
const productsContainer = document.getElementById("products");
const cartButton = document.getElementById("cart-button");
const cartModal = document.getElementById("cart-modal");
const closeModal = document.querySelector(".close");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const checkoutButton = document.getElementById("checkout");

function displayProducts() {
    productsContainer.innerHTML = "";
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Precio: $${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}">Agregar al Carrito</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-cart")) {
        const productId = parseInt(event.target.dataset.id);
        const product = products.find(p => p.id === productId);
        cart.push(product);
        updateCart();
    }
});

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}

cartButton.addEventListener("click", () => {
    cartModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    cartModal.style.display = "none";
});

checkoutButton.addEventListener("click", () => {
    alert("Compra realizada con éxito!");
    cart.length = 0;
    updateCart();
    cartModal.style.display = "none";
});

displayProducts();

