const myModal = new bootstrap.Modal(document.getElementById('modalId'))

function modificarGrupo(id, nombre) {
    myModal.show();
    document.getElementById("grupoId").value = id;
    document.getElementById("nombre").value = nombre;
  }
  var formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    // Obtener los valores de los campos de entrada
    let id = document.getElementById("grupoId").value;
    let nombre = document.getElementById("nombre").value;
    var datosEnviar = {
      id: id,
      nombre: nombre
    };
    if (
      Object.entries(datosEnviar).some(([key, value]) => value === "") == true
    ) {
      showAlert("No deben haber campos vacios", "error", "formulario");
      return;
    } else {
      console.log("aprobado");
    }
    console.log(datosEnviar);
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarGrupo.php",
      {
        method: 'POST',
        body: JSON.stringify(datosEnviar)
      }).then(function (response) {
        console.log("suceso2");
        //Manejo la respuesta de la API
        if (response.ok) {
          myModal.hide(); // Oculta el modal
          console.log("suceso3")
          ShowSucess(3);
          removeAlert();
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
  });



