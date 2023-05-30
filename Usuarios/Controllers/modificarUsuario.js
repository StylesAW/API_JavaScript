const myModal = new bootstrap.Modal(document.getElementById('modalId'))

function modificarUsuario(id,name,password) {
    myModal.show();
    document.getElementById("usuarioId").value = id;
    document.getElementById("name").value = name;
    document.getElementById("password").value = password;
    //document.getElementById("email").value = email;
  }
  var formulario = document.getElementById('formulario2');
  formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    // Obtener los valores de los campos de entrada
    console.log("holis")
    let id = document.getElementById("usuarioId").value;
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    var datosEnviar = {
      id: id,
      name: name,
      password: password
    };
    if (
      Object.entries(datosEnviar).some(([key, value]) => value === "") == true
    ) {
      showAlert("No deben haber campos vacios", "error", "formulario1");
      return;
    } else {
      console.log("aprobado");
    }
    console.log(datosEnviar);
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarUsuarios.php",
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



