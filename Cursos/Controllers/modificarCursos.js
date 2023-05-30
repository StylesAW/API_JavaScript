const myModal = new bootstrap.Modal(document.getElementById('modalId'))

function modificarCurso(id, nombre, descripcion, tiempo, usuario) {
    myModal.show();
    document.getElementById("cursoId").value = id;
    document.getElementById("nombre").value = nombre;
    document.getElementById("descripcion").value = descripcion;
    document.getElementById("tiempo").value = tiempo;
    document.getElementById("usuario").value = usuario;
  }
  var formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    // Obtener los valores de los campos de entrada
    let nombre = document.getElementById("nombre").value;
    let descripcion = document.getElementById("descripcion").value;
    let tiempo = document.getElementById("tiempo").value;
    let id = document.getElementById("cursoId").value;
    let usuario = document.getElementById("usuario").value;
    var datosEnviar = {
      id: id,
      nombre: nombre,
      descripcion: descripcion,
      tiempo: tiempo,
      usuario: usuario
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
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php",
      {
        method: 'POST',
        body: JSON.stringify(datosEnviar)
      }).then(function (response) {
        //Manejo la respuesta de la API
        if (response.ok) {
          myModal.hide(); // Oculta el modal
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



