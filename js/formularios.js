// Validación de formularios de Bootstrap y aviso en modal al completar la acción.
// Un formulario con data-aviso muestra el modal #modal-aviso cuando es válido.

(function () {
  "use strict";

  function mostrarAviso(titulo, mensaje) {
    var modalEl = document.getElementById("modal-aviso");
    if (!modalEl || !window.bootstrap) return;
    document.getElementById("modal-aviso-titulo").textContent = titulo;
    document.getElementById("modal-aviso-texto").textContent = mensaje;
    bootstrap.Modal.getOrCreateInstance(modalEl).show();
  }

  // Registro: la confirmación de contraseña debe coincidir con la contraseña
  var password = document.getElementById("registro-password");
  var confirmar = document.getElementById("registro-password-confirmar");
  if (password && confirmar) {
    var validarCoincidencia = function () {
      confirmar.setCustomValidity(
        confirmar.value && confirmar.value !== password.value ? "Las contraseñas no coinciden." : ""
      );
    };
    password.addEventListener("input", validarCoincidencia);
    confirmar.addEventListener("input", validarCoincidencia);
  }

  document.querySelectorAll("form[data-aviso]").forEach(function (form) {
    form.addEventListener("submit", function (evento) {
      evento.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
      }
      mostrarAviso(form.dataset.avisoTitulo || "Aviso", form.dataset.aviso);
      form.reset();
      form.classList.remove("was-validated");
    });
  });
})();
