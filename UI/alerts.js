function showAlert(message, type, form) {//show alert de error
    // remove existing alerts
    var existingAlerts = document.querySelectorAll(".alert");
    existingAlerts.forEach(function(alert) {
      alert.remove();
    });
    var alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-danger";
    alertDiv.id = "error-alert";
    alertDiv.textContent = message;
    setTimeout(function() {
    alertDiv.classList.add("show");
    alertDiv.classList.add("animate__shakeX");
  }, 100);

    if(form=="formulario1"){
      var submitButton = document.getElementById("position-alert-div");
      submitButton.parentNode.insertBefore(alertDiv, submitButton);
      var displacement = document.getElementById("modal-body-bar");
      displacement.scrollTop = displacement.scrollHeight;
    }
    if(form=="formulario"){
      var submitButton = document.getElementById("position-alert-divm");
      submitButton.parentNode.insertBefore(alertDiv, submitButton);
      var displacement = document.getElementById("modal-body-barm");
      displacement.scrollTop = displacement.scrollHeight;
    }

    
  }

  function removeAlert() {//remove error alert
    let alertDiv = document.querySelector("#error-alert");
    if (alertDiv) {
      alertDiv.remove();
    }
  }

  function ShowSucess(tipo){//Success Alert message 
    if(tipo==1){//create
      alertElement.getElementsByTagName("strong")[0].innerHTML = "Se ha insertado correctamente";
    }
    if(tipo==2){//delete
      alertElement.getElementsByTagName("strong")[0].innerHTML = "Se ha eliminado correctamente";
    }
    if(tipo==3){//update
      alertElement.getElementsByTagName("strong")[0].innerHTML = "Los datos se han actualizado correctamente";
    }
    alertElement.classList.add("show");
    setTimeout(function() {
    alertElement.classList.remove("show");
      }, 8000);
  }