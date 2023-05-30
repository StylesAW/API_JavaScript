const myModal = new bootstrap.Modal(document.getElementById('modalId'))

function modificarEstudiante(id,cedula,correoelectronico,telefono,telefonocelular,fechanacimiento,sexo,direccion,nombre,apellidopaterno,apellidomaterno,nacionalidad,idCarreras,usuario) {
    myModal.show();
    document.getElementById("estudianteId").value = id;
    document.getElementById("cedula").value = cedula;
    document.getElementById("correoelectronico").value = correoelectronico;
    document.getElementById("telefono").value = telefono;
    document.getElementById("telefonocelular").value = telefonocelular;
    document.getElementById("fechanacimiento").value = fechanacimiento;
    document.getElementById("sexo").value = sexo;
    document.getElementById("direccion").value = direccion;
    document.getElementById("apellidopaterno").value = apellidopaterno;
    document.getElementById("apellidomaterno").value = apellidomaterno;
    document.getElementById("nacionalidad").value = nacionalidad;
    document.getElementById("nombre").value = nombre;
    document.getElementById("usuario").value = usuario;
    //console.log(id,cedula,correoelectronico,telefono,telefonocelular,fechanacimiento,sexo,direccion,nacionalidad,nombre,apellidomaterno,apellidopaterno,usuario,idcarreras);
    document.getElementById("idCarreras").value = idCarreras;
  }
  var formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    // Obtener los valores de los campos de entrada
    let id = document.getElementById("estudianteId").value;
    let cedula = document.getElementById("cedula").value;
    let correoelectronico = document.getElementById("correoelectronico").value;
    let telefono = document.getElementById("telefono").value;
    let telefonocelular = document.getElementById("telefonocelular").value;
    let fechanacimiento = document.getElementById("fechanacimiento").value;
    let sexo = document.getElementById("sexo").value;
    let direccion = document.getElementById("direccion").value;
    let nombre = document.getElementById("nombre").value;
    let apellidopaterno = document.getElementById("apellidopaterno").value;
    let apellidomaterno = document.getElementById("apellidomaterno").value;
    let nacionalidad = document.getElementById("nacionalidad").value;    
    let idCarreras = document.getElementById("idCarreras").value;
    let usuario = document.getElementById("usuario").value;
    var datosEnviar = {
      id: id,
      cedula: cedula,
      correoelectronico: correoelectronico,
      telefono: telefono,
      telefonocelular: telefonocelular,
      fechanacimiento: fechanacimiento,
      sexo: sexo,
      direccion: direccion,
      nombre: nombre,
      apellidopaterno: apellidopaterno,
      apellidomaterno: apellidomaterno,
      nacionalidad: nacionalidad,
      idCarreras: idCarreras,
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
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarEstudiantes.php",
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



