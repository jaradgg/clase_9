document.getElementById('btn-alert').addEventListener('click', function() {
  alert('¡Mensaje de alerta!');
});

document
  .querySelector("button.button-menu-toggle")
  .addEventListener("click", function () {
    document
      .querySelector(".nav-links")
      .classList.toggle("nav-links-responsive");
  });

document
  .getElementById("formulario-contacto")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    // Aquí puedes agregar tu lógica para enviar el formulario o realizar alguna acción con los datos

    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);

    // Puedes agregar más código aquí, como mostrar un mensaje de confirmación o limpiar el formulario
  });
