var contenidoTablaResultado = document.querySelector("#resultados");
function cargarDatos() {
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php")
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
          <td>${valor.nombre}</td>         
          <td>
            <button type="button" class="btn btn-aqua text-white"  
            onClick="modificarGrupo('${valor.id}','${valor.nombre}')"
            >Editar</button> ||
            <button type="button" class="btn btn-danger" onClick="mostrarModalBorrarGrupo('${valor.id}','${valor.nombre}')">Borrar</button>
          </td>
        </tr>`;
    }
  }