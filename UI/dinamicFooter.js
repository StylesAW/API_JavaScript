var contenidoFooter = document.querySelector("#footer-request");
htmlrequestf();
function htmlrequestf(){
  contenidoFooter.innerHTML += `
  <footer class="">
      <div class="text-white">
        <div class="container"style="color: black">
          <div class="row pt-4">
            <div class="col-md-6 text-center">
              <h5>Información de contacto</h5>
              <p class="mb-1">kevin.ramirezalpizar@ucr.ac.cr</p>
              <p>Kevin Ramírez Alpízar &copy</p>
            </div>
            <div class="col-md-6 text-center">
              <h5>Redes</h5>              
                <a class="d-block" href="https://www.linkedin.com/in/kevinramirezin/">LinkedIn</a></li>                             
                <a class="d-block" href="https://github.com/StylesAW">GitHub</a></li>              
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-12 text-center">
              <p>© 2021 Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `
}