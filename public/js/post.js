
/* Posteo */
window.addEventListener('load', function () {
    //Seleccionamos elementos del DOM
    let title = document.getElementById('title');
    let message = document.getElementById('message');
    let btnEnviar = document.getElementById('btn-enviar');
    let container = document.getElementById('containermsm');
    let img = document.getElementById('img');
    let enviarimg = document.getElementById('enviarimg');
    //Agregando evento click en el boton guardar
    btnEnviar.addEventListener('click', function (event) {
      //previniendo la ación por defecto  que tiene l botón: recargar.
      event.preventDefault();
      //creando elemento contenedor 
      var ptitle = document.createElement('p');
      ptitle.setAttribute('class', 'size');
      var pmessage = document.createElement('p');
  
      ptitle.textContent = title.value;
      pmessage.textContent = message.value;
  
      container.insertBefore(pmessage, container.firstElementChild);
  
      container.insertBefore(ptitle, container.firstElementChild);
      title.value = ' ';
      message.value = ' ';
  
    });
  
  });
  /* Fin de Posteo */
  