// Sesión de usuario guardada en el navegador.
// Cuando hay sesión, la barra de navegación muestra el saludo y el botón de cerrar sesión
// en lugar de "Iniciar sesión" y "Registro".

(function () {
  "use strict";

  var CLAVE = "bacalaos-fc-sesion";

  function obtener() {
    try {
      return JSON.parse(localStorage.getItem(CLAVE));
    } catch (error) {
      return null;
    }
  }

  function guardar(datos) {
    localStorage.setItem(CLAVE, JSON.stringify(datos));
  }

  function cerrar() {
    localStorage.removeItem(CLAVE);
  }

  function actualizar() {
    var menu = document.querySelector(".navbar-nav");
    if (!menu) return;

    var sesion = obtener();

    // Ocultar o mostrar los botones de invitado
    menu.querySelectorAll('a[href="login.html"], a[href="registro.html"]').forEach(function (enlace) {
      var elemento = enlace.closest("li");
      if (elemento) elemento.hidden = !!sesion;
    });

    // Elemento de sesión iniciada (se crea una sola vez)
    var elementoSesion = menu.querySelector(".sesion-item");
    if (!sesion) {
      if (elementoSesion) elementoSesion.remove();
      return;
    }

    if (!elementoSesion) {
      elementoSesion = document.createElement("li");
      elementoSesion.className = "nav-item sesion-item d-flex align-items-center gap-2";

      var saludo = document.createElement("span");
      saludo.className = "nav-link fw-bold mb-0";

      var salir = document.createElement("button");
      salir.type = "button";
      salir.className = "btn btn-outline-primary btn-sm";
      salir.textContent = "Cerrar sesión";
      salir.addEventListener("click", function () {
        cerrar();
        window.location.reload();
      });

      elementoSesion.append(saludo, salir);
      menu.append(elementoSesion);
    }

    elementoSesion.querySelector("span").textContent = "Hola, " + sesion.nombre;
  }

  window.Sesion = { guardar: guardar, cerrar: cerrar, obtener: obtener, actualizar: actualizar };

  document.addEventListener("DOMContentLoaded", actualizar);
})();
