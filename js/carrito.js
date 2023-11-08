// Función para agregar un producto al carrito
function agregarProducto(nombre, precio) {
    // Recuperar el carrito de LocalStorage o inicializarlo si es la primera vez
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Agregar el producto al carrito
    carrito.push({ nombre, precio });

    // Guardar el carrito actualizado en LocalStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar el icono del carrito con la cantidad de productos
    const cantidadProductos = carrito.length;
    actualizarIconoCarrito(cantidadProductos);
}

// Función para actualizar el icono del carrito con la cantidad de productos
function actualizarIconoCarrito(cantidad) {
    const cantidadSpan = document.getElementById('cantidad-productos');
    cantidadSpan.textContent = cantidad;
}


// Función para ir a la página del carrito
function irAlCarrito() {
    window.location.href = 'carrito_compra.html';
}

// Función para quitar un producto del carrito
function quitarProducto(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const productoRemovido = carrito.splice(index, 1)[0];
    localStorage.setItem('carrito', JSON.stringify(carrito));

    mostrarCarrito();
    actualizarIconoCarrito(carrito.length);
}

// Función para vaciar completamente el carrito
function vaciarCarrito() {
    localStorage.removeItem('carrito');
    mostrarCarrito();
    actualizarIconoCarrito(0);
}

