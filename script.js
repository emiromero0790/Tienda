const productos = [
    { id: 1, nombre: "Oversized hoodie", precio: 10.99, imagen: "images/StrengthDepartmentOversizedHoodieLightGreyCoreMarlB1C8Z-GBCN_1920x.jpg", valoracion: 4.4 },
    { id: 2, nombre: "Blue Workout Set", precio: 19.99, imagen: "images/481791819_18484071535014707_4752335431520538635_n.-Photoroom.png", valoracion: 4.7 },
    { id: 3, nombre: "Power hoodie", precio: 14.99, imagen: "images/hoddie2.webp", valoracion: 4.7 },
    { id: 4, nombre: "Gymthark Oversized Tee", precio: 14.99, imagen: "images/Captura de pantalla 2025-03-13 215331-Photoroom.png", valoracion: 4.5 },
    { id: 5, nombre: "Crew socks", precio: 7.99, imagen: "images/tines.webp", valoracion: 4.5 },
    
];

const carrito = [];
const contenedorProductos = document.getElementById("products");
const botonCarrito = document.getElementById("cart-button");
const modalCarrito = document.getElementById("cart-modal");
const cerrarModal = document.querySelector(".close");
const listaCarrito = document.getElementById("cart-items");
const totalCarrito = document.getElementById("cart-total");
const contadorCarrito = document.getElementById("cart-count");
const botonFinalizarCompra = document.getElementById("checkout");

function mostrarProductos() {
    contenedorProductos.innerHTML = "";
    productos.forEach(producto => {
        const elementoProducto = document.createElement("div");
        elementoProducto.classList.add("product");
        elementoProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image"/>
            <h3>${producto.nombre}</h3><h3>⭐${producto.valoracion}</h3>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <button class="agregar-carrito" data-id="${producto.id}">Agregar al Carrito</button>
        `;
        contenedorProductos.appendChild(elementoProducto);
    });
}

document.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("agregar-carrito")) {
        const idProducto = parseInt(evento.target.dataset.id);
        const producto = productos.find(p => p.id === idProducto);
        carrito.push(producto);
        actualizarCarrito();
    }
});

function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    let total = 0;
    carrito.forEach((item) => {
        total += item.precio;
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        listaCarrito.appendChild(li);
    });
    totalCarrito.textContent = total.toFixed(2);
    contadorCarrito.textContent = carrito.length;
}

botonCarrito.addEventListener("click", () => {
    modalCarrito.style.display = "flex";
});

cerrarModal.addEventListener("click", () => {
    modalCarrito.style.display = "none";
});

botonFinalizarCompra.addEventListener("click", () => {
    alert("¡Compra realizada con éxito!");
    carrito.length = 0;
    actualizarCarrito();
    modalCarrito.style.display = "none";
});

mostrarProductos();
