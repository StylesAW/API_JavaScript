var contenidoHeader = document.querySelector("#header-request");
htmlrequest();
function htmlrequest(){
  contenidoHeader.innerHTML += `<nav  class="navbar navbar-expand-sm navbar-dark text-white">
  <div class="container-fluid">
    <a class="navbar-brand" href="/Complements/index.html">Styles</a>
    <button class="navbar-toggler d-lg-none btn-aqua" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
                <a class="nav-link active" href="/Cursos/Views/CursosList.html" aria-current="page">Cursos<span class="visually-hidden">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/Estudiantes/Views/EstudiantesList.html">Estudiantes</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/Profesores/Views/ProfesoresList.html">Profesores</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/Usuarios/Views/UsuariosList.html">Usuarios</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/Grupos/Views/GruposList.html">Grupos</a>
            </li>
        </ul>
        <div class="collapse" id="contentId">
          <form class="d-flex my-2 my-lg-0">
              <input class="form-control me-sm-2" type="text" placeholder="Search">
              <button class="btn btn-outline-success my-2 my-sm-0 text-white btn-aqua" type="submit">Search</button>
          </form>
        </div>
        <div class="mx-2">                
          <p class="d-flex my-2 my-lg-0">
              <a class="btn btn-primary px-4" data-bs-toggle="collapse" href="#contentId" aria-expanded="false" aria-controls="contentId">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
              </a>
            </p>
        </div>
    </div>          
</div>
</nav>`
}


// fetch('/Complements/header.html')
//     .then(response => response.text())
//     .then(html => {
//       document.getElementById('contenido-dinamico-header').innerHTML = html;
//     });
// fetch('/Complements/footer.html')
// .then(response => response.text())
// .then(html => {
//     document.getElementById('contenido-dinamico-footer').innerHTML = html;
// });

