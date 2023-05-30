var contenidoTablaResultado = document.querySelector("#resultados");
function cargarDatos() {
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaUsuarios.php")
      .then((respuesta) => respuesta.json()) //recibe los datos em formato json
      .then((datosrespuesta) => {
        setTable(datosrespuesta.data); //lo envio a la funcion de abajo
        // console.log('Datos', datosrespuesta.data);
      })
      .catch(console.log);
  }

  function setTable(datos) {
    //console.log("Datos", datos);

    for (const valor of datos) {
      //console.log("valor", valor);
      contenidoTablaResultado.innerHTML += `
        <tr class="table-primary">
          <td scope="row">${valor.id}</td>
          <td>${valor.name}</td>
          <td>${valor.password}</td>
          <td>${valor.email}</td>      
          <td>
            <button type="button" class="btn btn-aqua text-white"  
            onClick="modificarUsuario('${valor.id}','${valor.name}','${valor.password}','${valor.email}')"
            >Editar</button> || <button type="button" class="btn btn-danger" onClick="mostrarModalBorrarUsuario('${valor.id}','${valor.name}','${valor.email}')">Borrar</button>
          </td>
        </tr>`;
    }
  }