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
