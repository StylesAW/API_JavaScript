const myModal1 = new bootstrap.Modal(document.getElementById("modalCreate"));
let alertElement = document.querySelector("#alertSucess");
//console.log(alertElement);
function ShowCrearEstudiante() {
  myModal1.show();
}
let formulario1 = document.getElementById("formulario1");
formulario1.addEventListener("submit", function (e) {
  e.preventDefault(); // para frenar y que no recargue
  const datosEnviar = {
    cedula: document.getElementById("cedulacreate").value,
    correoelectronico: document.getElementById("correoelectronicocreate").value,
    telefono: document.getElementById("telefonocreate").value,
    telefonocelular: document.getElementById("telefonocelularcreate").value,
    fechanacimiento: document.getElementById("fechanacimientocreate").value,
    sexo: document.getElementById("sexocreate").value,
    direccion: document.getElementById("direccioncreate").value,
    nombre: document.getElementById("nombrecreate").value,
    apellidopaterno: document.getElementById("apellidopaternocreate").value,
    apellidomaterno: document.getElementById("apellidomaternocreate").value,
    nacionalidad: document.getElementById("nacionalidadcreate").value,
    idCarreras: document.getElementById("idCarrerascreate").value,
    usuario: document.getElementById("usuariocreate").value,
  };
  //console.log(datosEnviar);
  if (
    Object.entries(datosEnviar).some(([key, value]) => value === "") == true
  ) {
    showAlert("No deben haber campos vacios", "error", "formulario1");
    return;
  } else {
    console.log("aprobado");
  }
  fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php", {
    method: "POST",
    body: JSON.stringify(datosEnviar),
  })
    .then(function (response) {
      //Manejo la respuesta de la API
      if (response.ok) {
        //removeAlert();
        myModal1.hide(); // Oculta el modal
        //contenidoTablaResultado.innerHTML = ""; // Limpia el contenido de la tabla
        ShowSucess(1);
        document.getElementById("formulario1").reset();
        removeAlert();
        contenidoTablaResultado.innerHTML = "";
        cargarDatos(); // Vuelve a cargar los datos actualizados
      } else {
        alert("Error al enviar los datos.");
      }
    })
    .catch(console.log);
});
