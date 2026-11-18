const CLAVE_CARRITO = "bacalaos-fc-carrito";

function leerCarrito() {
  const guardado = localStorage.getItem(CLAVE_CARRITO);
  if (!guardado) return [];

  const carrito = JSON.parse(guardado);
  if (!Array.isArray(carrito)) {
    throw new Error("El contenido guardado del carrito no es válido.");
  }
  return carrito;
}

function guardarCarrito(carrito) {
  localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
}

function mostrarErrorCarrito(mensaje) {
  window.alert(mensaje);
}

const formularioProducto = document.querySelector(".formulario-producto");

if (formularioProducto) {
  formularioProducto.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const talla = formularioProducto.querySelector("select").value;
    if (!talla) return;

    const titulo = document.querySelector(".detalle h1").textContent.trim();
    const precioTexto = document.querySelector(".detalle .precio").textContent;
    const precio = Number(precioTexto.replace(/[^\d,]/g, "").replace(",", "."));
    const imagen = document.querySelector(".detalle img").getAttribute("src");
    const id = `${titulo}|${talla}`;

    try {
      const carrito = leerCarrito();
      const productoExistente = carrito.find((producto) => producto.id === id);

      if (productoExistente) {
        productoExistente.cantidad += 1;
      } else {
        carrito.push({ id, titulo, talla, precio, imagen, cantidad: 1 });
      }

      guardarCarrito(carrito);
      window.location.href = "carrito.html";
    } catch (error) {
      mostrarErrorCarrito("No se pudo guardar el producto en el carrito. " + error.message);
    }
  });
}

const listaCarrito = document.getElementById("lista-carrito");

if (listaCarrito) {
  const totalCarrito = document.getElementById("total-carrito");
  const mensajeCarrito = document.getElementById("mensaje-carrito");
  const botonVaciar = document.getElementById("vaciar-carrito");
  const formatoPrecio = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR"
  });

  function dibujarCarrito() {
    let carrito;
    try {
      carrito = leerCarrito();
    } catch (error) {
      mensajeCarrito.textContent = "No se pudo cargar el carrito. " + error.message;
      listaCarrito.replaceChildren();
      totalCarrito.textContent = "";
      botonVaciar.hidden = true;
      return;
    }

    listaCarrito.replaceChildren();
    botonVaciar.hidden = carrito.length === 0;
    botonPagar.hidden = carrito.length === 0;

    if (carrito.length === 0) {
      mensajeCarrito.textContent = "Tu carrito está vacío.";
      totalCarrito.textContent = "";
      return;
    }

    mensajeCarrito.textContent = "";
    let total = 0;

    carrito.forEach((producto) => {
      const fila = document.createElement("article");
      fila.className = "articulo-carrito";

      const imagen = document.createElement("img");
      imagen.src = producto.imagen;
      imagen.alt = producto.titulo;

      const detalles = document.createElement("div");
      const titulo = document.createElement("h2");
      titulo.textContent = producto.titulo;
      const talla = document.createElement("p");
      talla.textContent = `Talla: ${producto.talla}`;
      const precio = document.createElement("p");
      precio.textContent = `${formatoPrecio.format(producto.precio)} x ${producto.cantidad}`;
      detalles.append(titulo, talla, precio);

      const quitar = document.createElement("button");
      quitar.type = "button";
      quitar.className = "quitar-producto";
      quitar.textContent = "Quitar";
      quitar.setAttribute("aria-label", `Quitar ${producto.titulo}, talla ${producto.talla}`);
      quitar.addEventListener("click", () => {
        try {
          guardarCarrito(leerCarrito().filter((articulo) => articulo.id !== producto.id));
          dibujarCarrito();
        } catch (error) {
          mostrarErrorCarrito("No se pudo actualizar el carrito. " + error.message);
        }
      });

      fila.append(imagen, detalles, quitar);
      listaCarrito.append(fila);
      total += producto.precio * producto.cantidad;
    });

    totalCarrito.textContent = `Total: ${formatoPrecio.format(total)}`;
  }

  const botonPagar = document.getElementById("ir-a-pagar");

  botonVaciar.addEventListener("click", () => {
    try {
      guardarCarrito([]);
      dibujarCarrito();
    } catch (error) {
      mostrarErrorCarrito("No se pudo vaciar el carrito. " + error.message);
    }
  });

  dibujarCarrito();
}

// Ficha de novedad (novedad-detalle.html): añade el producto con talla y cantidad
const formularioNovedad = document.getElementById("form-detalle");

if (formularioNovedad) {
  formularioNovedad.addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (!formularioNovedad.checkValidity()) {
      formularioNovedad.classList.add("was-validated");
      return;
    }

    const talla = document.getElementById("detalle-talla").value;
    const cantidad = Math.max(1, Number(document.getElementById("detalle-cantidad").value) || 1);
    const titulo = formularioNovedad.dataset.titulo;
    const precio = Number(formularioNovedad.dataset.precio);
    const imagen = formularioNovedad.dataset.imagen;
    const id = `${titulo}|${talla}`;

    try {
      const carrito = leerCarrito();
      const existente = carrito.find((producto) => producto.id === id);
      if (existente) {
        existente.cantidad += cantidad;
      } else {
        carrito.push({ id, titulo, talla, precio, imagen, cantidad });
      }
      guardarCarrito(carrito);
      window.location.href = "carrito.html";
    } catch (error) {
      mostrarErrorCarrito("No se pudo guardar el producto en el carrito. " + error.message);
    }
  });
}

// Página de pago: muestra lo que hay en el carrito y lo vacía al confirmar la compra
const resumenPago = document.getElementById("pago-resumen-lista");

if (resumenPago) {
  const formatoPrecioPago = new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" });
  const subtotalPago = document.getElementById("pago-subtotal");
  const totalPago = document.getElementById("pago-total");
  const avisoVacio = document.getElementById("pago-vacio");
  const botonConfirmar = document.getElementById("pago-confirmar");
  const formPago = document.getElementById("form-pago");

  function dibujarResumenPago() {
    let carrito = [];
    try {
      carrito = leerCarrito();
    } catch (error) {
      carrito = [];
    }

    resumenPago.replaceChildren();
    let total = 0;

    carrito.forEach((producto) => {
      const item = document.createElement("div");
      item.className = "pago-resumen-item";

      const imagen = document.createElement("img");
      imagen.src = producto.imagen;
      imagen.alt = producto.titulo;

      const info = document.createElement("div");
      info.className = "flex-grow-1";
      const nombre = document.createElement("strong");
      nombre.textContent = producto.titulo;
      const detalle = document.createElement("div");
      detalle.className = "text-secondary small";
      detalle.textContent = `Talla ${producto.talla} · ${producto.cantidad} ud.`;
      info.append(nombre, detalle);

      const precio = document.createElement("span");
      precio.className = "fw-bold";
      precio.textContent = formatoPrecioPago.format(producto.precio * producto.cantidad);

      item.append(imagen, info, precio);
      resumenPago.append(item);
      total += producto.precio * producto.cantidad;
    });

    const textoTotal = formatoPrecioPago.format(total);
    subtotalPago.textContent = textoTotal;
    totalPago.textContent = textoTotal;
    avisoVacio.hidden = carrito.length > 0;
    botonConfirmar.disabled = carrito.length === 0;
  }

  // Se ejecuta antes que formularios.js: si el pago es válido, vacía el carrito
  formPago.addEventListener("submit", (evento) => {
    if (!formPago.checkValidity()) return;
    let carrito = [];
    try {
      carrito = leerCarrito();
    } catch (error) {
      carrito = [];
    }
    if (carrito.length === 0) {
      evento.preventDefault();
      evento.stopImmediatePropagation();
      mostrarErrorCarrito("Tu carrito está vacío. Añade productos antes de pagar.");
      return;
    }
    guardarCarrito([]);
    dibujarResumenPago();
  });

  dibujarResumenPago();
}
