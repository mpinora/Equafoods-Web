// Función para mostrar los productos en el carrito y calcular el total
function mostrarCarrito() {
    // Recuperar el carrito de LocalStorage
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Elemento donde se mostrarán los productos en el carrito
    const productosCarrito = document.getElementById('productos-carrito');

    // Variable para calcular el total
    let total = 0;

    // Limpiar el contenido previo
    productosCarrito.innerHTML = '';

    // Recorrer los productos en el carrito y mostrarlos
    carrito.forEach((producto, index) => {
        const productoElement = document.createElement('div');
        const nombreProducto = document.createElement('span');
        nombreProducto.textContent = `${producto.nombre}: `;
        productoElement.appendChild(nombreProducto);

        const precioProducto = document.createElement('span');
        precioProducto.textContent = `$${producto.precio.toFixed(0)}`;
        productoElement.appendChild(precioProducto);

        const quitarProductoButton = document.createElement('button');
        quitarProductoButton.textContent = 'Quitar';
        quitarProductoButton.onclick = function () {
            quitarProducto(index);
        };

        productoElement.appendChild(quitarProductoButton);

        productosCarrito.appendChild(productoElement);

        // Sumar el precio al total
        total += producto.precio;
    });

    // Actualizar el total en la página
    const totalElement = document.getElementById('total');
    totalElement.textContent = `$${total.toFixed(2)}`;
}

// Llamar a la función para mostrar el carrito al cargar la página
mostrarCarrito();

// Función para redirigir a la página del formulario de pago
function irAFormularioPago() {
    window.location.href = 'formulario-pago.html';
}

