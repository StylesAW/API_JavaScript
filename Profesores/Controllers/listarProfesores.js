var contenidoTablaResultado = document.querySelector("#resultados");
function cargarDatos() {
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaProfesores.php")
      .then((respuesta) => respuesta.json()) //recibe los datos em formato json
      .then((datosrespuesta) => {
        setTable(datosrespuesta.data); //lo envio a la funcion de abajo
        // console.log('Datos', datosrespuesta.data);
        RequestDataGroups(); 
      })
      .catch(console.log);
  }

  const selectCarrerascreate = document.querySelector(".carreras-options-create");
  const selectCarrerasedit = document.querySelector(".carreras-options-edit");
function RequestDataGroups(){
  fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaGrupo.php")
      .then((respuesta) => respuesta.json()) //recibe los datos em formato json
      .then((datosrespuesta) => {
        //lo envio a la funcion de abajo
        // console.log('Datos', datosrespuesta.data);
        FillGroups(datosrespuesta.data);
      })
      .catch(console.log);
}
  function FillGroups(datos){
    for(const valor of datos){//edit
      const option = document.createElement("option");
      option.value = valor.id;
      option.text = valor.nombre;
      
      selectCarrerasedit.appendChild(option);
    }    
    for(const valor of datos){//create
      const option = document.createElement("option");
      option.value = valor.id;
      option.text = valor.nombre;
      selectCarrerascreate.appendChild(option);
    }
  }

  function setTable(datos) {
    //console.log("Datos", datos);

    for (const valor of datos) {
      //console.log("valor", valor);
      contenidoTablaResultado.innerHTML += `
        <tr class="table-primary">
          <td scope="row">${valor.id}</td>
          <td>${valor.cedula}</td>
          <td>${valor.correoelectronico}</td>
          <td>${valor.telefono}</td>
          <td>${valor.telefonocelular}</td>
          <td>${valor.fechanacimiento}</td>
          <td>${valor.sexo}</td>
          <td>${valor.direccion}</td>
          <td>${valor.nombre}</td>
          <td>${valor.apellidopaterno}</td>
          <td>${valor.apellidomaterno}</td>
          <td>${valor.nacionalidad}</td>
          <td>${valor.idCarreras}</td>
          <td>${valor.usuario}</td>         
          <td>
            <button type="button" class="btn btn-aqua text-white"  
            onClick="modificarProfesor('${valor.id}','${valor.cedula}','${valor.correoelectronico}','${valor.telefono}','${valor.telefonocelular}',
            '${valor.fechanacimiento}','${valor.sexo}','${valor.direccion}','${valor.nombre}','${valor.apellidopaterno}',
            '${valor.apellidomaterno}','${valor.nacionalidad}','${valor.idCarreras}','${valor.usuario}')"
            >Editar</button> || <button type="button" class="btn btn-danger" onClick="mostrarModalBorrarProfesor('${valor.id}','${valor.cedula}','${valor.nombre}')">Borrar</button>
          </td>
        </tr>`;
    }
  }