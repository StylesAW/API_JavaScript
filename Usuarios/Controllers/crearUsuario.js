const myModal1 = new bootstrap.Modal(document.getElementById("modalCreate"));
let alertElement = document.querySelector("#alertSucess");

function ShowCrearUsuario() {
  myModal1.show();
}
let formulario1 = document.getElementById("formulario1");
formulario1.addEventListener("submit", function (e) {
  e.preventDefault(); // para frenar y que no recargue
  const datosEnviar = {
    name: document.getElementById("namecreate").value,
    email: document.getElementById("emailcreate").value,
    password: document.getElementById("passwordcreate").value
  };
  console.log(datosEnviar);
  if (
    Object.entries(datosEnviar).some(([key, value]) => value === "") == true
  ) {
    showAlert("No deben haber campos vacios", "error", "formulario1");
    return;
  } else {
    console.log("aprobado");
  }
  fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarUsuarios.php", {
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
