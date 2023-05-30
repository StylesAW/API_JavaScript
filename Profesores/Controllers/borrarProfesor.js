//Se crea el modal fuera de las funciones para apuntar a el modal a la hora de cerrarlo
const modalEliminar = new bootstrap.Modal(document.getElementById('modalEliminar'));
function mostrarModalBorrarProfesor(id,cedula, nombre) {
  modalEliminar.show();
  document.getElementById("profesorIdEliminar").value = id;
  document.getElementById("cedulaEliminar").value = cedula;
  document.getElementById("nombreEliminar").value = nombre;
}
function borrarProfesor() {
  let id = document.getElementById("profesorIdEliminar").value;
  var datosEnviar = {
    id: id
  };
  fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarProfesores.php",
    {
      method: 'POST',
      body: JSON.stringify(datosEnviar)
    }).then(function (response) {
      //Manejo la respuesta de la API
      if (response.ok) {
        modalEliminar.hide(); // Oculta el modal
        ShowSucess(2);
        contenidoTablaResultado.innerHTML = ""; // Limpia el contenido de la tabla
        cargarDatos(); // Vuelve a cargar los datos actualizados
      } else {
        alert("Error al enviar los datos.");
      }
    })
    .catch(function (error) {
      console.log(error);
      alert("Error al enviar los datos Catch");
    });
}
cargarDatos();